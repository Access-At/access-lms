import { ResponsePage } from "@/features/admin/pages"
import { ColumnDef } from "@tanstack/react-table"

export const columnTest: ColumnDef<ResponsePage>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "content",
    header: "Content",
  },
]
