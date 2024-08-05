import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

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
  return !item.path ? (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-x-2 py-3 ps-px font-medium hover:bg-transparent hover:text-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 sm:px-3'>
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
  ) : (
    <Link
      to={item.path}
      activeProps={{ className: "text-blue-600" }}
      className={cn("py-3 ps-px font-medium hover:text-blue-500 sm:px-3")}
    >
      {item.name}
    </Link>
  )
}
