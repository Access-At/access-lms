import { Dashboard } from "@/pages/dashboard"
import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createLazyFileRoute("/dashboard/")({
  component: React.memo(Dashboard),
})
