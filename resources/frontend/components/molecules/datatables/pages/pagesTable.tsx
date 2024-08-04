import { DataTable } from "@/components/molecules/dataTable"
import { FetchPagesResponse } from "@/features/admin/pages"
import { columnsAdmin } from "./columnsAdmin"

interface pagesTableProps {
  data: FetchPagesResponse
}

export default function PagesTable({ data }: pagesTableProps) {
  return <DataTable data={data.data} columns={columnsAdmin} />
}
