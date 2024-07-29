import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "../ui/menubar"

import { Menu } from "lucide-react"
import MobileMenuItem from "./mobileMenuItem"

export default function MobileMenu() {
  return (
    <Menubar className='sm:hidden'>
      <MenubarMenu>
        <MenubarTrigger aria-label='Open menu'>
          <Menu className='h-5 w-5' />
        </MenubarTrigger>
        <MenubarContent className='sm:hidden'>
          <MobileMenuItem />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
