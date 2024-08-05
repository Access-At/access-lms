import { TooltipProvider } from "@/components/ui/tooltip"

import { useAuth } from "@/contexts"
import { SideLink } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useNavigate, useRouter } from "@tanstack/react-router"
import { LogOut } from "lucide-react"
import NavLink from "../atoms/navLink"
import NavLinkDropdown from "../atoms/navLinkDropdown"
import NavLinkIcon from "../atoms/navLinkIcon"
import NavLinkIconDropdown from "../atoms/navLinkIconDropdown"
import { Button } from "../ui/button"

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean
  role?: string
  links: SideLink[]
  closeNav: () => void
}

export default function Nav({
  links,
  isCollapsed,
  className,
  closeNav,
}: NavProps) {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const router = useRouter()

  const handleLogout = () => {
    logout().then(() => {
      router.invalidate().finally(() => {
        navigate({ to: "/" })
      })
    })
  }

  const renderLink = ({ sub, ...rest }: SideLink) => {
    const key = `${rest.title}-${rest.href}`
    if (isCollapsed && sub)
      return (
        <NavLinkIconDropdown
          {...rest}
          sub={sub}
          key={key}
          closeNav={closeNav}
        />
      )

    if (isCollapsed)
      return <NavLinkIcon {...rest} key={key} closeNav={closeNav} />

    if (sub)
      return (
        <NavLinkDropdown {...rest} sub={sub} key={key} closeNav={closeNav} />
      )

    return <NavLink {...rest} key={key} closeNav={closeNav} />
  }
  return (
    <div
      data-collapsed={isCollapsed}
      className={cn(
        "group border-b bg-white py-2 transition-[max-height,padding] duration-500 data-[collapsed=true]:py-2 md:border-none",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col justify-between",
          isCollapsed ? "px-1" : "px-2",
        )}
      >
        <TooltipProvider delayDuration={0}>
          <nav className='grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-0'>
            {links.map(renderLink)}
          </nav>
        </TooltipProvider>
        <Button
          className={cn(
            "flex items-center justify-center",
            isCollapsed ? "" : "space-x-2",
          )}
          onClick={handleLogout}
        >
          <span
            className={cn(
              "text-md hidden font-semibold uppercase",
              isCollapsed ? "hidden" : "block",
            )}
          >
            Logout
          </span>
          <LogOut className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}
