import { useFetchPagesQuery } from "@/features/admin/pages"
import { useSuspenseQuery } from "@tanstack/react-query"
import { DataTable } from "../molecules/dataTable"
import { columnsAdmin } from "../molecules/datatables/pages/columnsAdmin"

export default function Pagescontent() {
  const { data: blogs } = useSuspenseQuery(useFetchPagesQuery())
  return (
    <div className='-mx-4 flex-1 overflow-auto rounded-lg bg-white px-4 py-6 lg:flex-row lg:space-x-12 lg:space-y-0'>
      <DataTable data={blogs.data} columns={columnsAdmin} />
      {/* <PagesTable data={blogs} /> */}
      {/* <DataTableTest data={blogs.data} columns={columnTest} /> */}
    </div>
  )
}
