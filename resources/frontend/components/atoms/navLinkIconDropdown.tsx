import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useCheckActiveNav from "@/hooks/useCheckActiveNav"
import { NavLinkProps } from "@/lib/types"
import { Link } from "@tanstack/react-router"
import { ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export default function NavLinkIconDropdown({
  title,
  icon: Icon,
  label,
  sub,
}: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav()
  /* Open collapsible by default
   * if one of child element is active */
  const isChildActive = !!sub?.find(s => checkActiveNav(s.href))

  return (
    <DropdownMenu>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant={isChildActive ? "secondary" : "ghost"}
              size='icon'
              className='h-12 w-12'
            >
              <Icon />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side='right' className='flex items-center gap-4'>
          {title}{" "}
          {label && (
            <span className='ml-auto text-muted-foreground'>{label}</span>
          )}
          <ChevronDown size={18} className='-rotate-90 text-muted-foreground' />
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent side='right' align='start' sideOffset={4}>
        <DropdownMenuLabel>
          {title} {label ? `(${label})` : ""}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {sub!.map(({ title, icon: Icon, label, href }) => (
          <DropdownMenuItem key={`${title}-${href}`} asChild>
            <Link to={href} activeProps={{ className: "bg-secondary" }}>
              <Icon /> <span className='ml-2 max-w-52 text-wrap'>{title}</span>
              {label && <span className='ml-auto text-xs'>{label}</span>}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
