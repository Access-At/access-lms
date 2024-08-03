import { LayoutComponents } from "@/components/atoms/layoutComponents"
import { tasks } from "@/constant/tasks"
import { columns } from "../molecules/columns"
import { DataTable } from "../molecules/dataTable"
import { UserNav } from "../molecules/userNav"

export default function Pagescontent() {
  // const { data } = useSuspenseQuery(useFetchPagesQuery())
  // FIXME: Error data tables
  return (
    <LayoutComponents>
      <LayoutComponents.Header className='flex justify-between md:bg-white'>
        <div className='ml-auto'>Pages</div>
        <div className='ml-auto flex items-center space-x-4'>
          <UserNav />
        </div>
      </LayoutComponents.Header>
      <LayoutComponents.Body>
        <div className='-mx-4 flex-1 overflow-auto rounded-lg bg-white px-4 py-6 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={tasks} columns={columns} />
        </div>
      </LayoutComponents.Body>
    </LayoutComponents>
  )
}
