import { Table } from "@tanstack/react-table"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { priorities, statuses } from "@/constant/tableToolbar"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { PlusIcon, X } from "lucide-react"
import { DataTableFacetedFilter } from "./dataTableFacetedFilter"
import { DataTableViewOptions } from "./dataTableViewOptions"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        <Input
          placeholder='Filter tasks...'
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={event =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
        <div className='flex gap-x-2'>
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              column={table.getColumn("status")}
              title='Status'
              options={statuses}
            />
          )}
          {table.getColumn("priority") && (
            <DataTableFacetedFilter
              column={table.getColumn("priority")}
              title='Priority'
              options={priorities}
            />
          )}
        </div>
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <X className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <div className='flex gap-x-2'>
        <DataTableViewOptions table={table} />
        <Link
          to='/dashboard/pages/add'
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-8 px-2 md:px-3",
          )}
          title='Add'
        >
          <PlusIcon className='h-4 w-4 md:mr-1' />
          <span className='hidden md:inline'>Add</span>
        </Link>
      </div>
    </div>
  )
}
