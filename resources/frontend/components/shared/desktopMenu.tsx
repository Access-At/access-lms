import { menu } from "@/constant/menu"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "@tanstack/react-router"
import { ChevronDown, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui"

export default function DesktopMenu() {
  const pathname = useLocation().pathname
  return (
    <div className='hidden w-full grow basis-full transition-all duration-300 sm:block'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7'>
        {menu.map((item, index) =>
          !item.path ? (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger className='flex items-center gap-x-2 py-3 ps-px font-medium text-gray-500 hover:bg-transparent hover:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 sm:px-3'>
                Dropdown <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                {item.dropdown?.map((item, index) =>
                  !item.path ? (
                    <DropdownMenuSub key={index}>
                      <DropdownMenuSubTrigger>
                        {item.name}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {item.submenu?.map((item, index) => (
                            <DropdownMenuItem key={index}>
                              <Link to={item.path}>{item.name}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ) : (
                    <DropdownMenuItem key={index}>
                      <Link to={item.path}>{item.name}</Link>
                    </DropdownMenuItem>
                  ),
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              to={item.path ? item.path : ""}
              key={index}
              className={cn(
                "py-3 ps-px font-medium sm:px-3",
                pathname === item.path
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-400",
                item.name === "Login" &&
                  "flex items-center gap-x-2 py-2 sm:my-6 sm:ms-4 sm:border-s sm:border-gray-300 sm:py-0 sm:ps-6",
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
          ),
        )}
      </div>
    </div>
  )
}
