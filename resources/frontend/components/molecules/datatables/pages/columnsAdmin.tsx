import { DataTableColumnHeader } from "@/components/molecules/dataTableColumnHeader"
import { DataTableRowActions } from "@/components/molecules/dataTableRowAction"
import { ResponsePage } from "@/features/admin/pages"
import { ColumnDef } from "@tanstack/react-table"

export const columnsAdmin: ColumnDef<ResponsePage>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "slug",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Slug' />
    ),
    cell: ({ row }) => <div>{row.getValue("slug")}</div>,
  },
  {
    accessorKey: "content",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Content' />
    ),
    cell: ({ row }) => (
      <div className='w-[80px]'>{row.getValue("content")}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
