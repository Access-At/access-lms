import { LayoutComponents } from "@/components/atoms/layoutComponents"
import { useFetchPagesQuery } from "@/features/admin/pages"
import { useSuspenseQuery } from "@tanstack/react-query"
import { UserNav } from "../molecules/userNav"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

export default function Pagescontent() {
  const { data: blogs } = useSuspenseQuery(useFetchPagesQuery())
  // FIXME: Error data tables
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
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>id</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Content</TableHead>
                <TableHead className='text-right'>Status</TableHead>
              </TableRow>
            </TableHeader>
            {blogs.data.map((blog, index) => (
              <TableBody key={blog.id}>
                <TableRow>
                  <TableCell className='font-medium'>{index + 1}</TableCell>
                  <TableCell>{blog.title}</TableCell>
                  <TableCell>{blog.content}</TableCell>
                  <TableCell className='text-right'>$250.00</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>

          {/* <DataTable data={blogs.data} columns={columns} /> */}
        </div>
      </LayoutComponents.Body>
    </LayoutComponents>
  )
}
