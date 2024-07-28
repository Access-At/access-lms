import * as React from "react"

import { Outlet, createFileRoute } from "@tanstack/react-router"

import Loading from "@/components/shared/loading"

const GuestLayout = React.lazy(() => import("@/components/layouts/guestLayout"))

export const Route = createFileRoute("/_index")({
  component: () => (
    <React.Suspense fallback={<Loading title="Sedang mempersiapkan halaman..." />}>
      <GuestLayout>
        <Outlet />
      </GuestLayout>
    </React.Suspense>
  ),
})
