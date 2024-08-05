import { Link } from "@tanstack/react-router"
import DesktopMenu from "./desktopMenu"
import MobileMenu from "./mobileMenu"

export default function Header() {
  return (
    <header className='fixed top-0 z-50 flex w-full flex-wrap border-b border-gray-200 bg-background py-3 text-sm text-gray-500 md:flex-nowrap md:justify-start md:py-0'>
      <nav
        className='relative mx-auto w-full max-w-[85rem] px-4 md:flex md:items-center md:justify-between md:px-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            className='flex-none text-xl font-semibold text-black'
            aria-label='Brand'
          >
            ACCESS LMS
          </Link>
          <MobileMenu />
        </div>
        <DesktopMenu />
      </nav>
    </header>
  )
}
