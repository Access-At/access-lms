import { SubmenuProps } from "@/lib/types"
import { MenubarSub, MenubarSubContent, MenubarSubTrigger } from "../ui"

export default function Submenu({ trigger, children }: SubmenuProps) {
  return (
    <MenubarSub>
      <MenubarSubTrigger>{trigger}</MenubarSubTrigger>
      <MenubarSubContent className='text-gray-500'>
        {children}
      </MenubarSubContent>
    </MenubarSub>
  )
}
