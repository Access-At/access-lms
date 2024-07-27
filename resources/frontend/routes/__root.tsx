import * as React from 'react'

import { Outlet, createRootRoute } from '@tanstack/react-router'

const TanStackRouterDevtools =
    process.env.NODE_ENV === 'production'
        ? () => null // Render nothing in production
        : React.lazy(() =>
            // Lazy load in development
            import('@tanstack/router-devtools').then(res => ({
                default: res.TanStackRouterDevtools,
                // For Embedded Mode
                // default: res.TanStackRouterDevtoolsPanel
            })),
        )

const TailwindIndictor =
    process.env.NODE_ENV === 'production'
        ? () => null
        : React.lazy(() =>
            import('@/components/shared').then(res => ({
                default: res.TailwindIndictor,
            })),
        )

export const Route = createRootRoute({
    component: () => (
        <React.Suspense fallback={<>Loading...</>}>
            <Outlet />
            <TanStackRouterDevtools />
            <TailwindIndictor />
        </React.Suspense>
    ),
})