import * as React from 'react'

import { createLazyFileRoute } from '@tanstack/react-router'

const Index = React.lazy(() => import("@/pages/index"))

export const Route = createLazyFileRoute('/')({
    component: () => (
        <React.Suspense fallback={<>Loading... page index</>}>
            <Index />
        </React.Suspense>
    ),
})
