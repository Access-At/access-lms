import { MenuLinkProps } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { MenubarItem } from "../ui"

export default function MenuLink({
  children,
  path,
  unauth,
  pathname,
}: MenuLinkProps) {
  return (
    <MenubarItem
      className={cn(
        pathname === path
          ? "bg-blue-500 text-white focus:bg-blue-500 focus:text-white"
          : "text-gray-500",
      )}
    >
      <Link
        to={path ? path : ""}
        className={cn(unauth && "flex items-center gap-x-2")}
      >
        {children}
      </Link>
    </MenubarItem>
  )
}
