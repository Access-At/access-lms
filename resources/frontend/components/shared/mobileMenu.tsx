import { menu } from "@/constant/menu"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "@tanstack/react-router"
import { Menu, User } from "lucide-react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui"

export default function MobileMenu() {
  const pathname = useLocation().pathname
  return (
    <Menubar className='sm:hidden'>
      <MenubarMenu>
        <MenubarTrigger aria-label='Open menu'>
          <Menu className='h-5 w-5' />
        </MenubarTrigger>
        <MenubarContent>
          {menu.map((item, index) =>
            !item.path ? (
              <MenubarSub key={index}>
                <MenubarSubTrigger
                  className='py-3 font-medium text-gray-500 hover:text-gray-400 sm:px-3'
                  aria-label='Open submenu'
                >
                  {item.name}
                </MenubarSubTrigger>
                <MenubarSubContent className='text-gray-500'>
                  {item.dropdown?.map((item, index) =>
                    !item.path ? (
                      <MenubarSub key={index}>
                        <MenubarSubTrigger>{item.name}</MenubarSubTrigger>
                        <MenubarSubContent className='text-gray-500'>
                          {item.submenu?.map((item, index) => (
                            <MenubarItem key={index}>{item.name}</MenubarItem>
                          ))}
                        </MenubarSubContent>
                      </MenubarSub>
                    ) : (
                      <MenubarItem key={index}>{item.name}</MenubarItem>
                    ),
                  )}
                </MenubarSubContent>
              </MenubarSub>
            ) : (
              <MenubarItem
                key={index}
                className={cn(
                  pathname === item.path
                    ? "bg-blue-500 text-white focus:bg-blue-500 focus:text-white"
                    : "text-gray-500",
                )}
              >
                <Link
                  to={item.path ? item.path : ""}
                  key={index}
                  className={cn(
                    item.name === "Login" && "flex items-center gap-x-2",
                  )}
                >
                  {item.name === "Login" ? (
                    <>
                      <User />
                      {item.name}
                    </>
                  ) : (
                    item.name
                  )}
                </Link>
              </MenubarItem>
            ),
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
