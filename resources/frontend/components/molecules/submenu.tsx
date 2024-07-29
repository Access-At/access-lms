import { MenubarSub, MenubarSubContent, MenubarSubTrigger } from "../ui/menubar"

import { SubmenuProps } from "@/lib/types"

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
