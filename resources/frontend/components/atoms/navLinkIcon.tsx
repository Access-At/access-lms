import { NavLinkProps } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "@tanstack/react-router"
import { buttonVariants } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export default function NavLinkIcon({
  title,
  icon: Icon,
  label,
  href,
}: NavLinkProps) {
  const { pathname } = useLocation()
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          to={href}
          className={cn(
            buttonVariants({
              variant: pathname === href ? "default" : "ghost",
              size: "icon",
            }),
            "h-12 w-12",
            pathname === href &&
              "md:transition-all md:duration-300 md:ease-in-out",
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
