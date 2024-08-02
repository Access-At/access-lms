import * as React from "react"

import { Dashboard } from "@/pages/admin/dashboard"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/admin/")({
  component: React.memo(Dashboard),
})
