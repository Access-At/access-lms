import * as React from "react"

import { createFileRoute, redirect } from "@tanstack/react-router"

const Login = React.lazy(() => import("@/pages/login"))

export const Route = createFileRoute("/auth")({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: "/dashboard",
      })
    }
  },
  component: Login,
})
