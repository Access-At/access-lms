import PagesAdd from "@/pages/admin/pagesAdd"
import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createLazyFileRoute("/dashboard/pages/add")({
  component: React.memo(PagesAdd),
})
