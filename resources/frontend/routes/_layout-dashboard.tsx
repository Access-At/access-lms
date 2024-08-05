import DashboardLayout from "@/components/layouts/dashboardLayout"
import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout-dashboard")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/auth",
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: DashboardLayout,
})
