import * as React from "react"

import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"

import Loading from "@/components/shared/loading"
import NotFoundError from "@/pages/errors/NotFoundError"

const DashboardLayout = React.lazy(
  () => import("@/components/layouts/dashboardLayout"),
)

export const Route = createFileRoute("/dashboard")({
  notFoundComponent: () => <NotFoundError />,
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
