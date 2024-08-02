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
        "h-12 justify-start text-wrap px-6 md:rounded-l-full",
        subLink && "h-10 w-full border-l border-l-slate-500 px-2",
        checkActiveNav(href) &&
          "md:translate-x-100 md:ml-auto md:mr-[-40%] md:w-80 md:transition-transform md:duration-300 md:ease-in-out",
      )}
      aria-current={checkActiveNav(href) ? "page" : undefined}
    >
      <div className='mr-2'>
        <Icon />
      </div>
      {title}
      {label && (
        <div className='ml-2 rounded-lg px-1 text-[0.625rem] text-primary-foreground'>
          {label}
        </div>
      )}
    </Link>
  )
}
