import * as React from "react"

import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"

import Loading from "@/components/shared/loading"

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
      {/* <GuestLayout> */}
      <Outlet />
      {/* </GuestLayout> */}
    </React.Suspense>
  ),
})
