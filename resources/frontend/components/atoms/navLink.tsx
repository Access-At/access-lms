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
  return (
    <Link
      to={href}
      onClick={closeNav}
      activeProps={{
        className: cn(
          buttonVariants({
            variant: "default",
          }),
          "md:transition-all md:duration-300 md:ease-in-out justify-start hover:text-white",
        ),
        "aria-current": "page",
      }}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "sm",
        }),
        "h-12 justify-start text-wrap px-6",
        subLink && "h-10 w-full border-l border-l-slate-500 px-2",
      )}
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
