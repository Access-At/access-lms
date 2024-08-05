import { topNav } from "@/constant/topNav"
import useIsCollapsed from "@/hooks/useIsCollapsed"
import { Route } from "@/routes/__root"
import { Outlet } from "@tanstack/react-router"
import { LayoutComponents } from "../atoms/layoutComponents"
import Sidebar from "../molecules/sidebar"
import { TopNav } from "../molecules/topNav"
import { UserNav } from "../molecules/userNav"

export default function DashboardLayout() {
  const { auth } = Route.useRouteContext()
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()

  return (
    <div className='relative h-full overflow-hidden bg-background'>
      <Sidebar
        role={auth.user!.role}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <LayoutComponents
        id='content'
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? "md:ml-14" : "md:ml-80"} h-full`}
      >
        {/* ===== Top Heading ===== */}
        <LayoutComponents.Header className='md:bg-white'>
          {auth.user!.role === "admin" && <TopNav links={topNav} />}
          <div className='ml-auto flex items-center space-x-4'>
            <UserNav user={auth.user} />
          </div>
        </LayoutComponents.Header>

        <LayoutComponents.Body className='px-4'>
          <Outlet />
        </LayoutComponents.Body>
      </LayoutComponents>
    </div>
  )
}
