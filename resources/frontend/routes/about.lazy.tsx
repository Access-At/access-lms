import * as React from "react"

import { createLazyFileRoute } from '@tanstack/react-router'

const About = React.lazy(() => import("@/pages/about"))

export const Route = createLazyFileRoute('/about')({
  component: () => (
    <React.Suspense fallback={<>Loading page about</>}>
      <About />
    </React.Suspense>
  )
})