import { Link, useLocation } from "@tanstack/react-router"
import { ChevronDown, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import { menu } from "@/constant/menu"
import { cn } from "@/lib/utils"

export default function DesktopMenuItem() {
  const pathname = useLocation().pathname
  return menu.map((item, index) =>
    item.path ? (
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
        {item.name === "Login" && <User />}
        {item.name}
      </Link>
    ) : (
      <DropdownMenu key={index}>
        <DropdownMenuTrigger className='flex items-center gap-x-2 py-3 ps-px font-medium text-gray-500 hover:bg-transparent hover:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 sm:px-3'>
          {item.name} <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          {item.dropdown?.map((item, index) => (
            <DropdownMenuItem key={index}>
              <Link to={item.path}>{item.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  )
}
