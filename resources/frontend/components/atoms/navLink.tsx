import useCheckActiveNav from "@/hooks/useCheckActiveNav"
import { NavLinkProps } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { buttonVariants } from "../ui/button"

export default function NavLink({
  title,
  icon: Icon,
  label,
  href,
  closeNav,
  subLink = false,
}: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav()
  return (
    <Link
      to={href}
      onClick={closeNav}
      className={cn(
        buttonVariants({
          variant: checkActiveNav(href) ? "default" : "ghost",
          size: "sm",
        }),
        "h-12 justify-start text-wrap rounded-l-full px-6",
        subLink && "h-10 w-full border-l border-l-slate-500 px-2",
      )}
      aria-current={checkActiveNav(href) ? "page" : undefined}
    >
      <div className='mr-2'>
        <Icon />
      </div>
      {title}
      {label && (
        <div className='ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground'>
          {label}
        </div>
      )}
    </Link>
  )
}
