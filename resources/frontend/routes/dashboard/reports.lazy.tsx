import ReportsPages from "@/pages/admin/reports"
import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createLazyFileRoute("/dashboard/reports")({
  component: React.memo(ReportsPages),
})
