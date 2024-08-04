import { LayoutComponents } from "@/components/atoms/layoutComponents"
import { useFetchPagesQuery } from "@/features/admin/pages"
import { useSuspenseQuery } from "@tanstack/react-query"
import PagesTable from "../datatables/pages/pagesTable"
import { UserNav } from "../molecules/userNav"

export default function Pagescontent() {
  const { data: blogs } = useSuspenseQuery(useFetchPagesQuery())

  return (
    <LayoutComponents>
      <LayoutComponents.Header className='flex justify-between md:bg-white'>
        <div className='ml-auto'>Blog</div>
        <div className='ml-auto flex items-center space-x-4'>
          <UserNav />
        </div>
      </LayoutComponents.Header>
      <LayoutComponents.Body>
        <div className='-mx-4 flex-1 overflow-auto rounded-lg bg-white px-4 py-6 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <PagesTable data={blogs} />
        </div>
      </LayoutComponents.Body>
    </LayoutComponents>
  )
}
