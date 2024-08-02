import { ChevronsLeft, Menu, X } from "lucide-react"
// import { IconChevronsLeft, IconMenu2, IconX } from '@tabler/icons-react'
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { sidelinks } from "@/constant/menuAdmin"
import { cn } from "@/lib/utils"
import { LayoutComponents } from "../atoms/layoutComponents"
import Nav from "./nav"

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({
  className,
  isCollapsed,
  setIsCollapsed,
}: SidebarProps) {
  const [navOpened, setNavOpened] = useState(false)
  /* Make body not scrollable when navBar is opened */
  useEffect(() => {
    if (navOpened) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [navOpened])

  return (
    <aside
      className={cn(
        `fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${isCollapsed ? "md:w-14" : "md:w-80"}`,
        className,
      )}
    >
      {/* Overlay in mobile */}
      <div
        onClick={() => setNavOpened(false)}
        className={`absolute inset-0 transition-[opacity] delay-100 duration-700 ${navOpened ? "h-svh opacity-50" : "h-0 opacity-0"} w-full bg-black md:hidden`}
      />

      <LayoutComponents fixed className={navOpened ? "h-svh" : ""}>
        {/* Header */}
        <LayoutComponents.Header
          sticky
          className='z-50 flex justify-between bg-white px-4 py-3 shadow-sm md:px-4'
        >
          <div
            className={`flex w-full items-center ${!isCollapsed ? "gap-2" : ""}`}
          >
            <span
              className={cn("text-2xl font-bold", !isCollapsed ? "hidden" : "")}
            >
              AL
            </span>
            <div
              className={`flex flex-col justify-end truncate ${isCollapsed ? "invisible w-0" : "visible w-full"}`}
            >
              <span className='text-center text-2xl font-bold'>Access LMS</span>
            </div>
          </div>

          {/* Toggle Button in mobile */}
          <Button
            variant='outline'
            size='icon'
            className='bg-white md:hidden'
            aria-label='Toggle Navigation'
            aria-controls='sidebar-menu'
            aria-expanded={navOpened}
            onClick={() => setNavOpened(prev => !prev)}
          >
            {navOpened ? <X /> : <Menu />}
          </Button>
        </LayoutComponents.Header>

        {/* Navigation links */}
        <Nav
          id='sidebar-menu'
          className={`z-40 h-full flex-1 overflow-auto ${navOpened ? "max-h-screen" : "max-h-0 py-0 md:max-h-screen md:py-2"}`}
          closeNav={() => setNavOpened(false)}
          isCollapsed={isCollapsed}
          links={sidelinks}
        />

        {/* Scrollbar width toggle button */}
        <Button
          onClick={() => setIsCollapsed(prev => !prev)}
          size='icon'
          variant='outline'
          className='absolute -right-5 top-1/2 z-50 hidden rounded-full md:inline-flex'
        >
          <ChevronsLeft
            className={`h-5 w-5 ${isCollapsed ? "rotate-180" : ""}`}
          />
        </Button>
      </LayoutComponents>
    </aside>
  )
}
