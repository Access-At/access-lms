import { Link } from "@tanstack/react-router"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import useCheckActiveNav from "@/hooks/useCheckActiveNav"
import { cn } from "@/lib/utils"

interface DesktopMenuItemProps {
  item: {
    path?: string
    name: string
    dropdown?: {
      path: string
      name: string
    }[]
  }
}

export default function DesktopMenuItem({ item }: DesktopMenuItemProps) {
  const { checkActiveNav } = useCheckActiveNav()

  return item.path ? (
    <>
      <Link
        to={item.path ? item.path : ""}
        className={cn(
          "py-3 ps-px font-medium sm:px-3",
          checkActiveNav(item.path)
            ? "text-blue-600"
            : "text-gray-500 hover:text-gray-400",
        )}
      >
        {item.name}
      </Link>
    </>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-x-2 py-3 ps-px font-medium text-gray-500 hover:bg-transparent hover:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 sm:px-3'>
        {item.name} <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        {item.dropdown?.map(item => (
          <DropdownMenuItem key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
