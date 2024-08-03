import PagesAdd from "@/pages/admin/pagesAdd"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/dashboard/pages/add")({
  component: React.memo(PagesAdd),
})
