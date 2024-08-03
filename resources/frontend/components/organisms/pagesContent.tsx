import { LayoutComponents } from "@/components/atoms/layoutComponents"
import { UserNav } from "./userNav"

export default function Pagescontent() {
  return (
    <LayoutComponents>
      <LayoutComponents.Header className='flex justify-between md:bg-white'>
        <div className='ml-auto'>Pages</div>
        <div className='ml-auto flex items-center space-x-4'>
          <UserNav />
        </div>
      </LayoutComponents.Header>
      <LayoutComponents.Body className='flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center'>
        <div className='w-full max-w-3xl'>
          {/* Disini nih biar di tengah */}
        </div>
      </LayoutComponents.Body>
    </LayoutComponents>
  )
}
