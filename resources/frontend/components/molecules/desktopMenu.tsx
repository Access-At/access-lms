import { menu } from "@/constant/menu"
import { useAuth } from "@/contexts"
import { Link } from "@tanstack/react-router"
import { User } from "lucide-react"
import DesktopMenuItem from "./desktopMenuItem"

export default function DesktopMenu() {
  const { user, isAuthenticated } = useAuth()
  return (
    <div className='hidden w-full grow basis-full transition-all duration-300 md:block'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-end md:ps-7'>
        {menu.map((item, index) => (
          <DesktopMenuItem key={index} item={item} />
        ))}
        {!isAuthenticated ? (
          <Link
            to='/auth'
            className='flex items-center gap-x-2 py-2 font-medium text-gray-500 hover:text-blue-500 md:my-6 md:ms-4 md:border-s md:border-gray-300 md:py-0 md:ps-6'
          >
            <User />
            <span>Login</span>
          </Link>
        ) : (
          <Link
            to={
              user?.role === "admin"
                ? "/dashboard/overview"
                : user?.role === "trainer"
                  ? "/trainer"
                  : "dashboard/users"
            }
            className='flex items-center gap-x-2 py-2 font-medium hover:text-blue-500 md:my-6 md:ms-4 md:border-s md:border-gray-300 md:py-0 md:ps-6'
          >
            Selamat datang, {user?.username}
          </Link>
        )}
      </div>
    </div>
  )
}
