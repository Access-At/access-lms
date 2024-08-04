import { Button, buttonVariants } from "@/components/ui/button"
import type {
  DataTableFilterableColumn,
  DataTableSearchableColumn,
} from "@/lib/types"
import { PlusCircle, Trash, X } from "lucide-react"
import { MouseEventHandler, useTransition } from "react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import type { Table } from "@tanstack/react-table"
import { DataTableFacetedFilter } from "./datatableFacetedFilter"
import { DataTableViewOptions } from "./datatableViewOption"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  filterableColumns?: DataTableFilterableColumn<TData>[]
  searchableColumns?: DataTableSearchableColumn<TData>[]
  newRowLink?: string
  deleteRowsAction?: MouseEventHandler<HTMLButtonElement>
}

export function DataTableToolbar<TData>({
  table,
  filterableColumns = [],
  searchableColumns = [],
  newRowLink,
  deleteRowsAction,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const [isDeletePending, startDeleteTransition] = useTransition()

  return (
    <div className='flex w-full items-center justify-between space-x-2 overflow-auto p-1'>
      <div className='flex flex-1 items-center space-x-2'>
        {table.options.enableGlobalFilter ? (
          <Input
            placeholder={`Search data...`}
            value={table.options.state.globalFilter}
            onChange={event => table.setGlobalFilter(event.target.value)}
            className='h-8 w-[150px] lg:w-[250px]'
          />
        ) : (
          <>
            {searchableColumns.length > 0 &&
              searchableColumns.map(
                column =>
                  table.getColumn(column.id ? String(column.id) : "") && (
                    <Input
                      key={String(column.id)}
                      placeholder={`Filter ${column.title}...`}
                      value={
                        (table
                          .getColumn(String(column.id))
                          ?.getFilterValue() as string) ?? ""
                      }
                      onChange={event =>
                        table
                          .getColumn(String(column.id))
                          ?.setFilterValue(event.target.value)
                      }
                      className='h-8 w-[150px] lg:w-[250px]'
                    />
                  ),
              )}
          </>
        )}
        {filterableColumns.length > 0 &&
          filterableColumns.map(
            column =>
              table.getColumn(column.id ? String(column.id) : "") && (
                <DataTableFacetedFilter
                  key={String(column.id)}
                  column={table.getColumn(column.id ? String(column.id) : "")}
                  title={column.title}
                  options={column.options}
                />
              ),
          )}
        {isFiltered && (
          <Button
            aria-label='Reset filters'
            variant='outline'
            className='h-8 px-2 lg:px-3'
            onClick={() => table.resetColumnFilters()}
          >
            Reset
            <X className='ml-2 size-4' aria-hidden='true' />
          </Button>
        )}
      </div>
      <div className='flex items-center space-x-2'>
        {deleteRowsAction && table.getSelectedRowModel().rows.length > 0 ? (
          <Button
            aria-label='Delete selected rows'
            variant='outline'
            size='sm'
            className='h-8'
            onClick={event => {
              startDeleteTransition(() => {
                table.toggleAllPageRowsSelected(false)
                deleteRowsAction(event)
              })
            }}
            disabled={isDeletePending}
          >
            <Trash className='mr-2 size-4' aria-hidden='true' />
            Delete
          </Button>
        ) : newRowLink ? (
          <Link aria-label='Create new row' to={newRowLink}>
            <div
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "h-8",
                }),
              )}
            >
              <PlusCircle className='mr-2 size-4' aria-hidden='true' />
              New
            </div>
          </Link>
        ) : null}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
