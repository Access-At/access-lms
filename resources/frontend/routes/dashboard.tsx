import * as React from "react"

import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"

import Loading from "@/components/shared/loading"

const DashboardLayout = React.lazy(
  () => import("@/components/layouts/dashboardLayout"),
)

export const Route = createFileRoute("/dashboard")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/auth",
      })
    }
  },
  component: () => (
    <React.Suspense
      fallback={<Loading title='Sedang mempersiapkan halaman...' />}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </React.Suspense>
  ),
})
