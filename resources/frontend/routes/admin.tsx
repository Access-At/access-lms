import * as React from "react"

import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"

import Loading from "@/components/shared/loading"

const AdminLayout = React.lazy(() => import("@/components/layouts/adminLayout"))

export const Route = createFileRoute("/admin")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/auth/admin",
      })
    }
  },
  component: () => (
    <React.Suspense
      fallback={<Loading title='Sedang mempersiapkan halaman...' />}
    >
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    </React.Suspense>
  ),
})
