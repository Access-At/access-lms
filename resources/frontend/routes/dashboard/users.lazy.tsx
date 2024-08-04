import UsersPages from "@/pages/admin/users"
import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createLazyFileRoute("/dashboard/users")({
  component: React.memo(UsersPages),
})
