/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/auth'
import { Route as LayoutDashboardImport } from './routes/_layout-dashboard'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutDashboardDashboardPagesIndexImport } from './routes/_layout-dashboard/dashboard/pages/index'

// Create Virtual Routes

const LayoutIndexLazyImport = createFileRoute('/_layout/')()
const LayoutDashboardDashboardUsersLazyImport = createFileRoute(
  '/_layout-dashboard/dashboard/users',
)()
const LayoutDashboardDashboardSubscriptionsLazyImport = createFileRoute(
  '/_layout-dashboard/dashboard/subscriptions',
)()
const LayoutDashboardDashboardSettingsLazyImport = createFileRoute(
  '/_layout-dashboard/dashboard/settings',
)()
const LayoutDashboardDashboardReportsLazyImport = createFileRoute(
  '/_layout-dashboard/dashboard/reports',
)()
const LayoutDashboardDashboardOverviewLazyImport = createFileRoute(
  '/_layout-dashboard/dashboard/overview',
)()
const LayoutDashboardDashboardCoursesLazyImport = createFileRoute(
  '/_layout-dashboard/dashboard/courses',
)()
const LayoutDashboardDashboardCategoriesLazyImport = createFileRoute(
  '/_layout-dashboard/dashboard/categories',
)()
const LayoutDashboardDashboardBatchesLazyImport = createFileRoute(
  '/_layout-dashboard/dashboard/batches',
)()
const LayoutDashboardDashboardPagesAddLazyImport = createFileRoute(
  '/_layout-dashboard/dashboard/pages/add',
)()

// Create/Update Routes

const AuthRoute = AuthImport.update({
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const LayoutDashboardRoute = LayoutDashboardImport.update({
  id: '/_layout-dashboard',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexLazyRoute = LayoutIndexLazyImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/index.lazy').then((d) => d.Route))

const LayoutDashboardDashboardUsersLazyRoute =
  LayoutDashboardDashboardUsersLazyImport.update({
    path: '/dashboard/users',
    getParentRoute: () => LayoutDashboardRoute,
  } as any).lazy(() =>
    import('./routes/_layout-dashboard/dashboard/users.lazy').then(
      (d) => d.Route,
    ),
  )

const LayoutDashboardDashboardSubscriptionsLazyRoute =
  LayoutDashboardDashboardSubscriptionsLazyImport.update({
    path: '/dashboard/subscriptions',
    getParentRoute: () => LayoutDashboardRoute,
  } as any).lazy(() =>
    import('./routes/_layout-dashboard/dashboard/subscriptions.lazy').then(
      (d) => d.Route,
    ),
  )

const LayoutDashboardDashboardSettingsLazyRoute =
  LayoutDashboardDashboardSettingsLazyImport.update({
    path: '/dashboard/settings',
    getParentRoute: () => LayoutDashboardRoute,
  } as any).lazy(() =>
    import('./routes/_layout-dashboard/dashboard/settings.lazy').then(
      (d) => d.Route,
    ),
  )

const LayoutDashboardDashboardReportsLazyRoute =
  LayoutDashboardDashboardReportsLazyImport.update({
    path: '/dashboard/reports',
    getParentRoute: () => LayoutDashboardRoute,
  } as any).lazy(() =>
    import('./routes/_layout-dashboard/dashboard/reports.lazy').then(
      (d) => d.Route,
    ),
  )

const LayoutDashboardDashboardOverviewLazyRoute =
  LayoutDashboardDashboardOverviewLazyImport.update({
    path: '/dashboard/overview',
    getParentRoute: () => LayoutDashboardRoute,
  } as any).lazy(() =>
    import('./routes/_layout-dashboard/dashboard/overview.lazy').then(
      (d) => d.Route,
    ),
  )

const LayoutDashboardDashboardCoursesLazyRoute =
  LayoutDashboardDashboardCoursesLazyImport.update({
    path: '/dashboard/courses',
    getParentRoute: () => LayoutDashboardRoute,
  } as any).lazy(() =>
    import('./routes/_layout-dashboard/dashboard/courses.lazy').then(
      (d) => d.Route,
    ),
  )

const LayoutDashboardDashboardCategoriesLazyRoute =
  LayoutDashboardDashboardCategoriesLazyImport.update({
    path: '/dashboard/categories',
    getParentRoute: () => LayoutDashboardRoute,
  } as any).lazy(() =>
    import('./routes/_layout-dashboard/dashboard/categories.lazy').then(
      (d) => d.Route,
    ),
  )

const LayoutDashboardDashboardBatchesLazyRoute =
  LayoutDashboardDashboardBatchesLazyImport.update({
    path: '/dashboard/batches',
    getParentRoute: () => LayoutDashboardRoute,
  } as any).lazy(() =>
    import('./routes/_layout-dashboard/dashboard/batches.lazy').then(
      (d) => d.Route,
    ),
  )

const LayoutDashboardDashboardPagesIndexRoute =
  LayoutDashboardDashboardPagesIndexImport.update({
    path: '/dashboard/pages/',
    getParentRoute: () => LayoutDashboardRoute,
  } as any)

const LayoutDashboardDashboardPagesAddLazyRoute =
  LayoutDashboardDashboardPagesAddLazyImport.update({
    path: '/dashboard/pages/add',
    getParentRoute: () => LayoutDashboardRoute,
  } as any).lazy(() =>
    import('./routes/_layout-dashboard/dashboard/pages/add.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout-dashboard': {
      id: '/_layout-dashboard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutDashboardImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout-dashboard/dashboard/batches': {
      id: '/_layout-dashboard/dashboard/batches'
      path: '/dashboard/batches'
      fullPath: '/dashboard/batches'
      preLoaderRoute: typeof LayoutDashboardDashboardBatchesLazyImport
      parentRoute: typeof LayoutDashboardImport
    }
    '/_layout-dashboard/dashboard/categories': {
      id: '/_layout-dashboard/dashboard/categories'
      path: '/dashboard/categories'
      fullPath: '/dashboard/categories'
      preLoaderRoute: typeof LayoutDashboardDashboardCategoriesLazyImport
      parentRoute: typeof LayoutDashboardImport
    }
    '/_layout-dashboard/dashboard/courses': {
      id: '/_layout-dashboard/dashboard/courses'
      path: '/dashboard/courses'
      fullPath: '/dashboard/courses'
      preLoaderRoute: typeof LayoutDashboardDashboardCoursesLazyImport
      parentRoute: typeof LayoutDashboardImport
    }
    '/_layout-dashboard/dashboard/overview': {
      id: '/_layout-dashboard/dashboard/overview'
      path: '/dashboard/overview'
      fullPath: '/dashboard/overview'
      preLoaderRoute: typeof LayoutDashboardDashboardOverviewLazyImport
      parentRoute: typeof LayoutDashboardImport
    }
    '/_layout-dashboard/dashboard/reports': {
      id: '/_layout-dashboard/dashboard/reports'
      path: '/dashboard/reports'
      fullPath: '/dashboard/reports'
      preLoaderRoute: typeof LayoutDashboardDashboardReportsLazyImport
      parentRoute: typeof LayoutDashboardImport
    }
    '/_layout-dashboard/dashboard/settings': {
      id: '/_layout-dashboard/dashboard/settings'
      path: '/dashboard/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof LayoutDashboardDashboardSettingsLazyImport
      parentRoute: typeof LayoutDashboardImport
    }
    '/_layout-dashboard/dashboard/subscriptions': {
      id: '/_layout-dashboard/dashboard/subscriptions'
      path: '/dashboard/subscriptions'
      fullPath: '/dashboard/subscriptions'
      preLoaderRoute: typeof LayoutDashboardDashboardSubscriptionsLazyImport
      parentRoute: typeof LayoutDashboardImport
    }
    '/_layout-dashboard/dashboard/users': {
      id: '/_layout-dashboard/dashboard/users'
      path: '/dashboard/users'
      fullPath: '/dashboard/users'
      preLoaderRoute: typeof LayoutDashboardDashboardUsersLazyImport
      parentRoute: typeof LayoutDashboardImport
    }
    '/_layout-dashboard/dashboard/pages/add': {
      id: '/_layout-dashboard/dashboard/pages/add'
      path: '/dashboard/pages/add'
      fullPath: '/dashboard/pages/add'
      preLoaderRoute: typeof LayoutDashboardDashboardPagesAddLazyImport
      parentRoute: typeof LayoutDashboardImport
    }
    '/_layout-dashboard/dashboard/pages/': {
      id: '/_layout-dashboard/dashboard/pages/'
      path: '/dashboard/pages'
      fullPath: '/dashboard/pages'
      preLoaderRoute: typeof LayoutDashboardDashboardPagesIndexImport
      parentRoute: typeof LayoutDashboardImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  LayoutRoute: LayoutRoute.addChildren({ LayoutIndexLazyRoute }),
  LayoutDashboardRoute: LayoutDashboardRoute.addChildren({
    LayoutDashboardDashboardBatchesLazyRoute,
    LayoutDashboardDashboardCategoriesLazyRoute,
    LayoutDashboardDashboardCoursesLazyRoute,
    LayoutDashboardDashboardOverviewLazyRoute,
    LayoutDashboardDashboardReportsLazyRoute,
    LayoutDashboardDashboardSettingsLazyRoute,
    LayoutDashboardDashboardSubscriptionsLazyRoute,
    LayoutDashboardDashboardUsersLazyRoute,
    LayoutDashboardDashboardPagesAddLazyRoute,
    LayoutDashboardDashboardPagesIndexRoute,
  }),
  AuthRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/_layout-dashboard",
        "/auth"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/"
      ]
    },
    "/_layout-dashboard": {
      "filePath": "_layout-dashboard.tsx",
      "children": [
        "/_layout-dashboard/dashboard/batches",
        "/_layout-dashboard/dashboard/categories",
        "/_layout-dashboard/dashboard/courses",
        "/_layout-dashboard/dashboard/overview",
        "/_layout-dashboard/dashboard/reports",
        "/_layout-dashboard/dashboard/settings",
        "/_layout-dashboard/dashboard/subscriptions",
        "/_layout-dashboard/dashboard/users",
        "/_layout-dashboard/dashboard/pages/add",
        "/_layout-dashboard/dashboard/pages/"
      ]
    },
    "/auth": {
      "filePath": "auth.tsx"
    },
    "/_layout/": {
      "filePath": "_layout/index.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout-dashboard/dashboard/batches": {
      "filePath": "_layout-dashboard/dashboard/batches.lazy.tsx",
      "parent": "/_layout-dashboard"
    },
    "/_layout-dashboard/dashboard/categories": {
      "filePath": "_layout-dashboard/dashboard/categories.lazy.tsx",
      "parent": "/_layout-dashboard"
    },
    "/_layout-dashboard/dashboard/courses": {
      "filePath": "_layout-dashboard/dashboard/courses.lazy.tsx",
      "parent": "/_layout-dashboard"
    },
    "/_layout-dashboard/dashboard/overview": {
      "filePath": "_layout-dashboard/dashboard/overview.lazy.tsx",
      "parent": "/_layout-dashboard"
    },
    "/_layout-dashboard/dashboard/reports": {
      "filePath": "_layout-dashboard/dashboard/reports.lazy.tsx",
      "parent": "/_layout-dashboard"
    },
    "/_layout-dashboard/dashboard/settings": {
      "filePath": "_layout-dashboard/dashboard/settings.lazy.tsx",
      "parent": "/_layout-dashboard"
    },
    "/_layout-dashboard/dashboard/subscriptions": {
      "filePath": "_layout-dashboard/dashboard/subscriptions.lazy.tsx",
      "parent": "/_layout-dashboard"
    },
    "/_layout-dashboard/dashboard/users": {
      "filePath": "_layout-dashboard/dashboard/users.lazy.tsx",
      "parent": "/_layout-dashboard"
    },
    "/_layout-dashboard/dashboard/pages/add": {
      "filePath": "_layout-dashboard/dashboard/pages/add.lazy.tsx",
      "parent": "/_layout-dashboard"
    },
    "/_layout-dashboard/dashboard/pages/": {
      "filePath": "_layout-dashboard/dashboard/pages/index.tsx",
      "parent": "/_layout-dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
