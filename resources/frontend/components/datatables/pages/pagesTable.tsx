import { DataTable } from "@/components/molecules/dataTable"
import { FetchPagesResponse } from "@/features/admin/pages"
import { columns } from "./columns"

interface pagesTableProps {
  data: FetchPagesResponse
}

export default function PagesTable({ data }: pagesTableProps) {
  return <DataTable data={data.data} columns={columns} />
}
