import ReportsPages from "@/pages/admin/reports"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/dashboard/reports")({
  component: React.memo(ReportsPages),
})
