import BatchesPages from "@/pages/admin/batches"
import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createLazyFileRoute("/dashboard/batches")({
  component: React.memo(BatchesPages),
})
