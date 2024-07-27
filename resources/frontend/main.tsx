import './globals.css'

// import React, { StrictMode } from 'react'
import * as React from 'react'

import { RouterProvider, createRouter } from '@tanstack/react-router'

import { QueryClient } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a client
const queryClient = new QueryClient()

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    // auth: undefined!,
    queryClient,
  },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}