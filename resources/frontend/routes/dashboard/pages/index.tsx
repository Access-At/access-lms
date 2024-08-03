import PagesAdmin from "@/pages/admin/pages"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/dashboard/pages/")({
  component: React.memo(PagesAdmin),
})
