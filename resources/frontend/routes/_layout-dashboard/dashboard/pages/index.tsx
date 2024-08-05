import * as React from "react"

import PagesAdmin from "@/pages/admin/pages"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout-dashboard/dashboard/pages/")({
  component: React.memo(PagesAdmin),
})