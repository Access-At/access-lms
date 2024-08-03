import { LayoutComponents } from "../atoms/layoutComponents"
import { UserNav } from "../molecules/userNav"

export default function UsersContent() {
  return (
    <LayoutComponents>
      <LayoutComponents.Header className='flex justify-between md:bg-white'>
        <div className='ml-auto'>Users</div>
        <div className='ml-auto flex items-center space-x-4'>
          <UserNav />
        </div>
      </LayoutComponents.Header>
      <LayoutComponents.Body className='flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center'>
        <div>adsasdasd</div>
      </LayoutComponents.Body>
    </LayoutComponents>
  )
}
