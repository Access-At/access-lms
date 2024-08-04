/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  DataTableFilterableColumn,
  DataTableSearchableColumn,
} from "@/lib/types"
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type PaginationState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"

import { useDebounce } from "@/hooks/useDebounce"
import { useNavigate, useRouterState } from "@tanstack/react-router"
import { useCallback, useEffect, useMemo, useState } from "react"
import { z } from "zod"

const dataTableParms = z.object({
  pageNum: z.coerce.number().optional().default(1),
  pageSize: z.coerce.number().optional().default(10),
  search: z
    .string()
    .min(1)
    .or(
      z
        .object({
          column: z.string(),
          value: z.string(),
        })
        .array(),
    )
    .optional(),
  filter: z
    .object({
      column: z.string(),
      value: z.string().array(),
    })
    .array()
    .optional(),
  sort: z
    .object({
      column: z.string(),
      desc: z.boolean(),
    })
    .optional(),
})

interface UseDataTableProps<TData, TValue> {
  /**
   * The data for the table
   * @default []
   * @type TData[]
   */
  data: TData[]

  /**
   * The columns of the table
   * @default []
   * @type ColumnDef<TData, TValue>[]
   */
  columns: ColumnDef<TData, TValue>[]

  /**
   * The number of pages in the table
   * @type number
   */
  pageCount: number

  /**
   * The searchable columns of the table
   * @default []
   * @type {id: keyof TData, title: string}[]
   * @example searchableColumns={[{ id: "title", title: "titles" }]}
   */
  searchableColumns?: DataTableSearchableColumn<TData>[]

  /**
   * The filterable columns of the table. When provided, renders dynamic faceted filters, and the advancedFilter prop is ignored.
   * @default []
   * @type {id: keyof TData, title: string, options: { label: string, value: string, icon?: ComponentType<{ className?: string }> }[]}[]
   * @example filterableColumns={[{ id: "status", title: "Status", options: ["todo", "in-progress", "done", "canceled"]}]}
   */
  filterableColumns?: DataTableFilterableColumn<TData>[]

  enableRowSelection?: boolean
  enableGlobalFilter?: boolean
  enableHiding?: boolean
  enableColumnFilters?: boolean
  searchParams: z.infer<typeof dataTableParms>
}

export function useDataTable<TData, TValue>({
  data,
  columns,
  pageCount,
  searchableColumns = [],
  filterableColumns = [],
  enableRowSelection = false,
  enableGlobalFilter = false,
  enableHiding = false,
  enableColumnFilters = false,
  searchParams,
}: UseDataTableProps<TData, TValue>) {
  const {
    location: { pathname },
  } = useRouterState()
  const navigate = useNavigate({ from: pathname })

  const params = searchParams

  // Search params
  const { pageNum: page, pageSize: perPage, sort, search, filter } = params
  const { column, desc: order } = sort ?? {}

  // Create query string
  const createQueryData = useCallback(
    (params: Record<string, string | number | null | Record<string, any>>) => {
      const newSearchParams = new URLSearchParams(objectToString(searchParams))

      for (const [key, value] of Object.entries(params)) {
        if (
          value === null ||
          (Array.isArray(value) && value.length === 0) ||
          value === ""
        ) {
          newSearchParams.delete(key)
        } else if (Array.isArray(value)) {
          newSearchParams.set(key, JSON.stringify(value))
        } else if (typeof value === "object") {
          // Check if the value is an object
          newSearchParams.set(key, JSON.stringify(value))
        } else {
          newSearchParams.set(key, String(value))
        }
      }

      // Convert URLSearchParams to an object
      const objectParams: Record<string, string | number> = {}
      newSearchParams.forEach((value, key) => {
        const parsedValue = tryParseJSON(value) // Custom function to parse JSON strings
        const finalValue = parsedValue !== null ? parsedValue : value
        objectParams[key] = finalValue
      })

      return objectParams
    },
    [searchParams],
  )

  function objectToString(obj: Record<string, any>, parentKey = ""): string {
    const parts: string[] = []

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const currentKey = parentKey ? `${parentKey}[${key}]` : key

        if (typeof obj[key] === "object" && obj[key] !== null) {
          // if (key === 'sort') {
          parts.push(
            `${currentKey}=${encodeURIComponent(JSON.stringify(obj[key]))}`,
          )
          // } else {
          //     parts.push(objectToString(obj[key], currentKey));
          // }
        } else {
          parts.push(`${currentKey}=${obj[key]}`)
        }
      }
    }

    return parts.join("&")
  }

  // Custom function to parse JSON strings
  function tryParseJSON(value: string): any {
    try {
      return JSON.parse(value)
    } catch (error) {
      return null
    }
  }

  // Initial column filters
  // const initialColumnFilters: ColumnFiltersState = useMemo(() => {
  //   return Object.entries(searchParams).reduce<ColumnFiltersState>(
  //     (filters, [key, value]) => {
  //       const filterableColumn = filterableColumns.find(
  //         (column) => column.id === key
  //       )
  //       const searchableColumn = searchableColumns.find(
  //         (column) => column.id === key
  //       )

  //       if (filterableColumn) {
  //         filters.push({
  //           id: key,
  //           value: value,
  //         })
  //       }
  //       else if (searchableColumn) {
  //         filters.push({
  //           id: key,
  //           value: [value],
  //         })
  //       }

  //       return filters
  //     },
  //     []
  //   )
  // }, [filterableColumns, searchableColumns, searchParams])

  const initialColumnFilters: ColumnFiltersState = useMemo(() => {
    return [
      // Initialize with searchParams.filter
      ...(filter || []).map(filter => ({
        id: filter.column, // Assuming column is the identifier
        value: filter.value,
      })),
      // Initialize with searchParams.search
      ...(Array.isArray(search)
        ? Object.entries(search).map(([, value]) => ({
            id: value.column,
            value: value.value,
          }))
        : []),
    ]
  }, [filter, search])

  // Table states
  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] =
    useState<ColumnFiltersState>(initialColumnFilters)
  const [globalFilter, setGlobalFilter] = useState(
    typeof search === "string" ? search : "",
  )

  let tableOption = {}
  let tableState = {}

  if (enableHiding) {
    tableOption = {
      ...tableOption,
      onColumnVisibilityChange: setColumnVisibility,
    }
    tableState = {
      ...tableState,
      columnVisibility,
    }
  }

  if (enableRowSelection) {
    tableOption = {
      ...tableOption,
      onRowSelectionChange: setRowSelection,
    }
    tableState = {
      ...tableState,
      rowSelection,
    }
  }

  if (enableGlobalFilter) {
    tableOption = {
      ...tableOption,
      onGlobalFilterChange: setGlobalFilter,
    }
    tableState = {
      ...tableState,
      globalFilter,
    }
  }

  if (enableColumnFilters) {
    tableOption = {
      ...tableOption,
      onColumnFiltersChange: setColumnFilters,
    }
    tableState = {
      ...tableState,
      columnFilters,
    }
  }

  // Handle server-side pagination
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: page - 1,
    pageSize: perPage,
  })

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  )

  useEffect(() => {
    setPagination({
      pageIndex: page - 1,
      pageSize: perPage,
    })
  }, [page, perPage])

  useEffect(() => {
    navigate({
      to: pathname,
      search: createQueryData({
        pageNum: pageIndex + 1,
        pageSize: pageSize,
      }),
    })
  }, [pageIndex, pageSize])

  // Handle server-side sorting
  const [sorting, setSorting] = useState<SortingState>(
    column
      ? [
          {
            id: column,
            desc: order !== undefined ? order : false,
          },
        ]
      : [],
  )

  useEffect(() => {
    navigate({
      to: pathname,
      search: createQueryData({
        ...searchParams,
        sort: {
          column: sorting[0].id,
          desc: sorting[0].desc,
        },
      }),
    })
  }, [sorting])

  // Handle server-side filtering
  const debouncedSearchableColumnFilters = JSON.parse(
    useDebounce(
      JSON.stringify(
        columnFilters.filter(filter => {
          return searchableColumns.find(column => column.id === filter.id)
        }),
      ),
      500,
    ),
  ) as ColumnFiltersState

  // Handle server-side global filter
  const debounceGlobalFilter = useDebounce(globalFilter, 500)

  const filterableColumnFilters = columnFilters.filter(filter => {
    return filterableColumns.find(column => column.id === filter.id)
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Prevent reseting the page on initial render
    if (!mounted || sort?.column == "") {
      setMounted(true)
      return
    }

    // Initialize new params
    const newParamsObject = {
      ...searchParams,
      pageNum: 1,
    }

    // Handle debounced searchable column filters
    for (const column of debouncedSearchableColumnFilters) {
      if (typeof column.value === "string") {
        newParamsObject.search = [{ column: column.id, value: column.value }]
      }
    }

    // Handle Debounce global search
    if (debounceGlobalFilter) {
      newParamsObject.search = debounceGlobalFilter
    }

    // Handle debounced searchable column filters
    // for (const column of debouncedSearchableColumnFilters) {
    //   if (typeof column.value === "string") {
    //     Object.assign(newParamsObject, {
    //       [column.id]: typeof column.value === "string" ? column.value : null,
    //     })
    //   }
    // }

    // Handle filterable column filters
    // for (const column of filterableColumnFilters) {
    //   if (typeof column.value === 'object' && Array.isArray(column.value)) {
    //     if(newParamsObject.filter !== undefined ) {
    //       newParamsObject.filter.push({ column: column.id, value: column.value })  ;
    //     } else {
    //       newParamsObject.filter = [{ column: column.id, value: column.value }] ;
    //     }
    //   }
    // }

    // Handle filterable column filters
    for (const column of filterableColumnFilters) {
      if (typeof column.value === "object" && Array.isArray(column.value)) {
        const existingFilter = newParamsObject.filter?.find(
          filter => filter.column === column.id,
        )

        if (existingFilter) {
          existingFilter.value = [
            ...new Set([...existingFilter.value, ...column.value]),
          ]
        } else {
          newParamsObject.filter = [
            ...(newParamsObject.filter || []),
            { column: column.id, value: column.value },
          ]
        }
      }
    }

    // Remove deleted filter
    if (newParamsObject.filter) {
      // Remove filter
      for (const filter of newParamsObject.filter) {
        if (
          !filterableColumnFilters.find(column => column.id === filter.column)
        ) {
          // Remove elements from newParamsObject.filter where column === filter.column
          newParamsObject.filter = (newParamsObject.filter || []).filter(
            item => item.column !== filter.column,
          )
        }
      }
    }

    // Remove deleted search
    if (newParamsObject.search) {
      if (typeof newParamsObject.search == "string") {
        if (debounceGlobalFilter.trim().length < 1) {
          newParamsObject.search = ""
        }
      } else {
        for (const search of newParamsObject.search) {
          if (
            !debouncedSearchableColumnFilters.find(
              column => column.id === search.column,
            )
          ) {
            // Remove elements from newParamsObject.search where column === search.column
            newParamsObject.search = (
              Array.isArray(newParamsObject.search)
                ? newParamsObject.search
                : []
            ).filter(item => item.column !== search.column)
          }
        }
      }
    }

    // Remove deleted values
    // for (const key of Object.keys(searchParams) ) {
    //   if (
    //     (searchableColumns.find((column) => column.id === key) &&
    //       !debouncedSearchableColumnFilters.find(
    //         (column) => column.id === key
    //       )) ||
    //     (filterableColumns.find((column) => column.id === key) &&
    //       !filterableColumnFilters.find((column) => column.id === key))
    //   ) {
    //     Object.assign(newParamsObject, { [key]: null })
    //   }
    // }

    // After cumulating all the changes, push new params
    navigate({
      to: pathname,
      search: createQueryData(newParamsObject),
    })
  }, [
    JSON.stringify(debouncedSearchableColumnFilters),

    JSON.stringify(filterableColumnFilters),
    debounceGlobalFilter,
  ])

  const table = useReactTable({
    data,
    columns,
    pageCount: pageCount ?? -1,
    state: {
      ...tableState,
      pagination,
      sorting,
    },
    ...tableOption,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    enableRowSelection: enableRowSelection,
    enableGlobalFilter: enableGlobalFilter,
    enableHiding: enableHiding,
    enableColumnFilters: enableColumnFilters,
    maxLeafRowFilterDepth: 0,
  })

  return { table }
}
