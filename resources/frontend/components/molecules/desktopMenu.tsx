import { menu } from "@/constant/menu"
import { useAuth } from "@/contexts"
import { Link } from "@tanstack/react-router"
import { User } from "lucide-react"
import DesktopMenuItem from "./desktopMenuItem"

export default function DesktopMenu() {
  const { user, isAuthenticated } = useAuth()
  return (
    <div className='hidden w-full grow basis-full transition-all duration-300 sm:block'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7'>
        {menu.map((item, index) => (
          <DesktopMenuItem key={index} item={item} />
        ))}
        {!isAuthenticated ? (
          <Link
            to='/auth'
            className='flex items-center gap-x-2 py-2 font-medium text-gray-500 hover:text-gray-400 sm:my-6 sm:ms-4 sm:border-s sm:border-gray-300 sm:py-0 sm:ps-6'
          >
            <User />
            <span>Login</span>
          </Link>
        ) : (
          <Link
            to='/dashboard'
            className='flex items-center gap-x-2 py-2 font-medium text-gray-500 hover:text-gray-400 sm:my-6 sm:ms-4 sm:border-s sm:border-gray-300 sm:py-0 sm:ps-6'
          >
            Selamat datang, {user?.username}
          </Link>
        )}
      </div>
    </div>
  )
}
