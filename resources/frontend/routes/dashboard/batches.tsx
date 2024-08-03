import BatchesPages from "@/pages/admin/batches"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/dashboard/batches")({
  component: React.memo(BatchesPages),
})
