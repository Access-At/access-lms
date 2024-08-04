import { DataTableColumnHeader } from "@/components/molecules/dataTableColumnHeader"
import { DataTableRowActions } from "@/components/molecules/dataTableRowAction"
import { ResponsePage } from "@/features/admin/pages"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<ResponsePage>[] = [
  //   {
  //     accessorKey: "id",
  //     header: ({ column }) => (
  //       <DataTableColumnHeader column={column} title='UUID' />
  //     ),
  //     cell: ({ row }) => <div>{row.getValue("id")}</div>,
  //   },
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
  //   {
  //     accessorKey: "content",
  //     header: ({ column }) => (
  //       <DataTableColumnHeader column={column} title='UUID' />
  //     ),
  //     cell: ({ row }) => (
  //       <div className='w-[80px]'>{row.getValue("content")}</div>
  //     ),
  //   },
  //   {
  //     accessorKey: "created_at",
  //     header: ({ column }) => (
  //       <DataTableColumnHeader column={column} title='Dibuat Pada' />
  //     ),
  //     cell: ({ row }) => (
  //       <div className='w-[80px]'>{row.getValue("created_at")}</div>
  //     ),
  //   },
  //   {
  //     accessorKey: "updated_at",
  //     header: ({ column }) => (
  //       <DataTableColumnHeader column={column} title='Diupdate Pada' />
  //     ),
  //     cell: ({ row }) => (
  //       <div className='w-[80px]'>{row.getValue("updated_at")}</div>
  //     ),
  //   },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
