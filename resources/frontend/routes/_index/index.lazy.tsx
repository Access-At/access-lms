import * as React from "react"

import { createLazyFileRoute } from "@tanstack/react-router"

const Home = React.lazy(() => import("@/pages/home"))

export const Route = createLazyFileRoute("/_index/")({
  component: () => (
    <React.Suspense fallback={<>Loading...Page is Loading</>}>
      <Home />
    </React.Suspense>
  ),
})
