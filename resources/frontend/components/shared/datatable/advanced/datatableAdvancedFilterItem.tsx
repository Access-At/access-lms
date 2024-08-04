import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useNavigate, useRouterState } from "@tanstack/react-router"
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDebounce } from "@/hooks/useDebounce"
import type { DataTableFilterOption } from "@/lib/types"
import { cn } from "@/lib/utils"
import type { Table } from "@tanstack/react-table"
import { Trash } from "lucide-react"
import { DataTableFacetedFilter } from "../datatableFacetedFilter"

interface DataTableAdvancedFilterItemProps<TData> {
  table: Table<TData>
  selectedOption: DataTableFilterOption<TData>
  setSelectedOptions: Dispatch<SetStateAction<DataTableFilterOption<TData>[]>>
}

export function DataTableAdvancedFilterItem<TData>({
  table,
  selectedOption,
  setSelectedOptions,
}: DataTableAdvancedFilterItemProps<TData>) {
  const {
    location: { pathname, search: searchParams },
  } = useRouterState()
  const navigate = useNavigate({ from: pathname })

  const [value, setValue] = useState("")
  const debounceValue = useDebounce(value, 500)
  const [open, setOpen] = useState(true)

  const selectedValues =
    selectedOption.items.length > 0
      ? Array.from(
          new Set(
            table
              .getColumn(String(selectedOption.value))
              ?.getFilterValue() as string[],
          ),
        )
      : []

  const filterVarieties =
    selectedOption.items.length > 0
      ? ["is", "is not"]
      : ["contains", "does not contain", "is", "is not"]

  const [filterVariety, setFilterVariety] = useState(filterVarieties[0])

  // Create query string
  const createQueryData = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams.toString())

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key)
        } else {
          newSearchParams.set(key, String(value))
        }
      }

      const objectParams = Object.fromEntries(newSearchParams.entries())

      return objectParams
    },
    [searchParams],
  )

  useEffect(() => {
    if (debounceValue.length > 0) {
      navigate({
        to: pathname,
        search: createQueryData({
          [selectedOption.value]: `${debounceValue}${
            debounceValue.length > 0 ? `.${filterVariety}` : ""
          }`,
        }),
      })
    }

    if (debounceValue.length === 0) {
      navigate({
        to: pathname,
        search: createQueryData({
          [selectedOption.value]: null,
        }),
      })
    }
  }, [debounceValue, filterVariety, selectedOption.value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className={cn(
            "h-7 truncate rounded-full",
            (selectedValues.length > 0 || value.length > 0) && "bg-muted/50",
          )}
        >
          {value.length > 0 || selectedValues.length > 0 ? (
            <>
              <span className='font-medium capitalize'>
                {selectedOption.label}:
              </span>
              {selectedValues.length > 0 ? (
                <span className='ml-1'>
                  {selectedValues.length > 2
                    ? `${selectedValues.length} selected`
                    : selectedValues.join(", ")}
                </span>
              ) : (
                <span className='ml-1'>{value}</span>
              )}
            </>
          ) : (
            <span className='capitalize'>{selectedOption.label}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-60 space-y-1 text-xs' align='start'>
        <div className='flex items-center space-x-1'>
          <div className='flex flex-1 items-center space-x-1'>
            <div className='capitalize'>{selectedOption.label}</div>
            <Select onValueChange={value => setFilterVariety(value)}>
              <SelectTrigger className='h-auto w-fit truncate border-none px-2 py-0.5 hover:bg-muted/50'>
                <SelectValue placeholder={filterVarieties[0]} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {filterVarieties.map(variety => (
                    <SelectItem key={variety} value={variety}>
                      {variety}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button
            aria-label='Remove filter'
            variant='ghost'
            size='icon'
            className='size-8'
            onClick={() => {
              navigate({
                to: pathname,
                search: createQueryData({
                  [selectedOption.value]: null,
                }),
              })

              setSelectedOptions(prev =>
                prev.filter(item => item.value !== selectedOption.value),
              )
            }}
          >
            <Trash className='size-4' aria-hidden='true' />
          </Button>
        </div>
        {selectedOption.items.length > 0 ? (
          table.getColumn(
            selectedOption.value ? String(selectedOption.value) : "",
          ) && (
            <DataTableFacetedFilter
              key={String(selectedOption.value)}
              column={table.getColumn(
                selectedOption.value ? String(selectedOption.value) : "",
              )}
              title={selectedOption.label}
              options={selectedOption.items}
              variant='command'
            />
          )
        ) : (
          <Input
            placeholder='Type here...'
            className='h-8'
            value={value}
            onChange={event => setValue(event.target.value)}
            autoFocus
          />
        )}
      </PopoverContent>
    </Popover>
  )
}
