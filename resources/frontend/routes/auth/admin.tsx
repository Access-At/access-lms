import * as React from "react"

import { createFileRoute, redirect } from "@tanstack/react-router"

import Login from "@/pages/admin/login"

export const Route = createFileRoute("/auth/admin")({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: "/admin",
      })
    }
  },
  component: React.memo(Login),
})
