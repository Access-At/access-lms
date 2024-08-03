import { menu } from "@/constant/menu"
import { useLocation } from "@tanstack/react-router"
import { User } from "lucide-react"
import MenuLink from "../atoms/menuLink"
import Submenu from "./submenu"

export default function MobileMenuItem() {
  const pathname = useLocation().pathname
  return menu.map((item, index) =>
    item.path ? (
      <MenuLink
        key={index}
        path={item.path}
        pathname={pathname}
        unauth={item.name === "Login"}
      >
        {item.name === "Login" && <User />}
        {item.name}
      </MenuLink>
    ) : (
      <Submenu key={index} trigger={item.name}>
        {item.dropdown?.map((item, index) =>
          !item.path ? (
            <Submenu key={index} trigger={item.name}>
              {item.submenu?.map(item => (
                <MenuLink key={item.name} path={item.path} pathname={pathname}>
                  {item.name}
                </MenuLink>
              ))}
            </Submenu>
          ) : (
            <MenuLink key={index} path={item.path} pathname={pathname}>
              {item.name}
            </MenuLink>
          ),
        )}
      </Submenu>
    ),
  )
}
