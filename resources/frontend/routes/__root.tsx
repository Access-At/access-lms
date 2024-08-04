import * as React from "react"

import { Outlet, createRootRouteWithContext } from "@tanstack/react-router"

import Loading from "@/components/shared/loading"
import { AuthContext } from "@/contexts"
import { QueryClient } from "@tanstack/react-query"
import { Toaster } from "sonner"

export interface MyRouterContext {
  auth: AuthContext
  queryClient: QueryClient
}

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then(res => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      )

const TailwindIndictor =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@/components/shared/tailwindIndictor").then(res => ({
          default: res.TailwindIndictor,
        })),
      )

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <React.Suspense fallback={<Loading title='Mohon tunggu sebentar...' />}>
      <Outlet />
      <Toaster position='top-right' expand={true} />
      <TanStackRouterDevtools />
      <TailwindIndictor />
    </React.Suspense>
  ),
})
