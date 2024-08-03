import UsersPages from "@/pages/admin/users"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/dashboard/users")({
  component: React.memo(UsersPages),
})
