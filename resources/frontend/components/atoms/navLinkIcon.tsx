import useCheckActiveNav from "@/hooks/useCheckActiveNav"
import { NavLinkProps } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { buttonVariants } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export default function NavLinkIcon({
  title,
  icon: Icon,
  label,
  href,
}: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav()
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          to={href}
          className={cn(
            buttonVariants({
              variant: checkActiveNav(href) ? "secondary" : "ghost",
              size: "icon",
            }),
            "h-12 w-12",
          )}
        >
          <Icon />
          <span className='sr-only'>{title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side='right' className='flex items-center gap-4'>
        {title}
        {label && (
          <span className='ml-auto text-muted-foreground'>{label}</span>
        )}
      </TooltipContent>
    </Tooltip>
  )
}
