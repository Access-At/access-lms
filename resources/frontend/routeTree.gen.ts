/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as AuthImport } from './routes/auth'
import { Route as IndexImport } from './routes/_index'
import { Route as DashboardPagesIndexImport } from './routes/dashboard/pages/index'

// Create Virtual Routes

const DashboardIndexLazyImport = createFileRoute('/dashboard/')()
const IndexIndexLazyImport = createFileRoute('/_index/')()
const DashboardUsersLazyImport = createFileRoute('/dashboard/users')()
const DashboardSubscriptionsLazyImport = createFileRoute(
  '/dashboard/subscriptions',
)()
const DashboardSettingsLazyImport = createFileRoute('/dashboard/settings')()
const DashboardReportsLazyImport = createFileRoute('/dashboard/reports')()
const DashboardCoursesLazyImport = createFileRoute('/dashboard/courses')()
const DashboardCategoriesLazyImport = createFileRoute('/dashboard/categories')()
const DashboardBatchesLazyImport = createFileRoute('/dashboard/batches')()
const DashboardPagesAddLazyImport = createFileRoute('/dashboard/pages/add')()

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/_index',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexLazyRoute = DashboardIndexLazyImport.update({
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any).lazy(() =>
  import('./routes/dashboard/index.lazy').then((d) => d.Route),
)

const IndexIndexLazyRoute = IndexIndexLazyImport.update({
  path: '/',
  getParentRoute: () => IndexRoute,
} as any).lazy(() => import('./routes/_index/index.lazy').then((d) => d.Route))

const DashboardUsersLazyRoute = DashboardUsersLazyImport.update({
  path: '/users',
  getParentRoute: () => DashboardRoute,
} as any).lazy(() =>
  import('./routes/dashboard/users.lazy').then((d) => d.Route),
)

const DashboardSubscriptionsLazyRoute = DashboardSubscriptionsLazyImport.update(
  {
    path: '/subscriptions',
    getParentRoute: () => DashboardRoute,
  } as any,
).lazy(() =>
  import('./routes/dashboard/subscriptions.lazy').then((d) => d.Route),
)

const DashboardSettingsLazyRoute = DashboardSettingsLazyImport.update({
  path: '/settings',
  getParentRoute: () => DashboardRoute,
} as any).lazy(() =>
  import('./routes/dashboard/settings.lazy').then((d) => d.Route),
)

const DashboardReportsLazyRoute = DashboardReportsLazyImport.update({
  path: '/reports',
  getParentRoute: () => DashboardRoute,
} as any).lazy(() =>
  import('./routes/dashboard/reports.lazy').then((d) => d.Route),
)

const DashboardCoursesLazyRoute = DashboardCoursesLazyImport.update({
  path: '/courses',
  getParentRoute: () => DashboardRoute,
} as any).lazy(() =>
  import('./routes/dashboard/courses.lazy').then((d) => d.Route),
)

const DashboardCategoriesLazyRoute = DashboardCategoriesLazyImport.update({
  path: '/categories',
  getParentRoute: () => DashboardRoute,
} as any).lazy(() =>
  import('./routes/dashboard/categories.lazy').then((d) => d.Route),
)

const DashboardBatchesLazyRoute = DashboardBatchesLazyImport.update({
  path: '/batches',
  getParentRoute: () => DashboardRoute,
} as any).lazy(() =>
  import('./routes/dashboard/batches.lazy').then((d) => d.Route),
)

const DashboardPagesIndexRoute = DashboardPagesIndexImport.update({
  path: '/pages/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardPagesAddLazyRoute = DashboardPagesAddLazyImport.update({
  path: '/pages/add',
  getParentRoute: () => DashboardRoute,
} as any).lazy(() =>
  import('./routes/dashboard/pages/add.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_index': {
      id: '/_index'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/batches': {
      id: '/dashboard/batches'
      path: '/batches'
      fullPath: '/dashboard/batches'
      preLoaderRoute: typeof DashboardBatchesLazyImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/categories': {
      id: '/dashboard/categories'
      path: '/categories'
      fullPath: '/dashboard/categories'
      preLoaderRoute: typeof DashboardCategoriesLazyImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/courses': {
      id: '/dashboard/courses'
      path: '/courses'
      fullPath: '/dashboard/courses'
      preLoaderRoute: typeof DashboardCoursesLazyImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/reports': {
      id: '/dashboard/reports'
      path: '/reports'
      fullPath: '/dashboard/reports'
      preLoaderRoute: typeof DashboardReportsLazyImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/settings': {
      id: '/dashboard/settings'
      path: '/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof DashboardSettingsLazyImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/subscriptions': {
      id: '/dashboard/subscriptions'
      path: '/subscriptions'
      fullPath: '/dashboard/subscriptions'
      preLoaderRoute: typeof DashboardSubscriptionsLazyImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/users': {
      id: '/dashboard/users'
      path: '/users'
      fullPath: '/dashboard/users'
      preLoaderRoute: typeof DashboardUsersLazyImport
      parentRoute: typeof DashboardImport
    }
    '/_index/': {
      id: '/_index/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexIndexLazyImport
      parentRoute: typeof IndexImport
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexLazyImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/pages/add': {
      id: '/dashboard/pages/add'
      path: '/pages/add'
      fullPath: '/dashboard/pages/add'
      preLoaderRoute: typeof DashboardPagesAddLazyImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/pages/': {
      id: '/dashboard/pages/'
      path: '/pages'
      fullPath: '/dashboard/pages'
      preLoaderRoute: typeof DashboardPagesIndexImport
      parentRoute: typeof DashboardImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute: IndexRoute.addChildren({ IndexIndexLazyRoute }),
  AuthRoute,
  DashboardRoute: DashboardRoute.addChildren({
    DashboardBatchesLazyRoute,
    DashboardCategoriesLazyRoute,
    DashboardCoursesLazyRoute,
    DashboardReportsLazyRoute,
    DashboardSettingsLazyRoute,
    DashboardSubscriptionsLazyRoute,
    DashboardUsersLazyRoute,
    DashboardIndexLazyRoute,
    DashboardPagesAddLazyRoute,
    DashboardPagesIndexRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_index",
        "/auth",
        "/dashboard"
      ]
    },
    "/_index": {
      "filePath": "_index.tsx",
      "children": [
        "/_index/"
      ]
    },
    "/auth": {
      "filePath": "auth.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/batches",
        "/dashboard/categories",
        "/dashboard/courses",
        "/dashboard/reports",
        "/dashboard/settings",
        "/dashboard/subscriptions",
        "/dashboard/users",
        "/dashboard/",
        "/dashboard/pages/add",
        "/dashboard/pages/"
      ]
    },
    "/dashboard/batches": {
      "filePath": "dashboard/batches.lazy.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/categories": {
      "filePath": "dashboard/categories.lazy.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/courses": {
      "filePath": "dashboard/courses.lazy.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/reports": {
      "filePath": "dashboard/reports.lazy.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/settings": {
      "filePath": "dashboard/settings.lazy.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/subscriptions": {
      "filePath": "dashboard/subscriptions.lazy.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/users": {
      "filePath": "dashboard/users.lazy.tsx",
      "parent": "/dashboard"
    },
    "/_index/": {
      "filePath": "_index/index.lazy.tsx",
      "parent": "/_index"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.lazy.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/pages/add": {
      "filePath": "dashboard/pages/add.lazy.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/pages/": {
      "filePath": "dashboard/pages/index.tsx",
      "parent": "/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
