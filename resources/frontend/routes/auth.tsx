import * as React from "react"

import { createFileRoute, redirect } from "@tanstack/react-router"

const Login = React.lazy(() => import("@/pages/login"))

export const Route = createFileRoute("/auth")({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to:
          context.auth.user!.role === "admin"
            ? "/dashboard/overview"
            : context.auth.user!.role === "trainer"
              ? "/trainer"
              : "/user",
      })
    }
  },
  component: Login,
})
