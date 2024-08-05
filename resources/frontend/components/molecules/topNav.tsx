import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"

interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  links: {
    title: string
    href: string
  }[]
}

export function TopNav({ className, links, ...props }: TopNavProps) {
  return (
    <>
      <div className='md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size='icon'
              variant='outline'
              className='bg-white hover:bg-primary hover:text-white'
            >
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side='bottom' align='start'>
            {links.map(({ title, href }) => (
              <DropdownMenuItem key={`${title}-${href}`} asChild>
                <Link
                  to={href}
                  activeProps={{ className: "text-primary" }}
                  className='text-muted-foreground'
                >
                  {title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav
        className={cn(
          "hidden items-center space-x-4 md:flex lg:space-x-6",
          className,
        )}
        {...props}
      >
        {links.map(({ title, href }) => (
          <Link
            key={`${title}-${href}`}
            to={href}
            activeProps={{ className: "text-primary" }}
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  )
}
