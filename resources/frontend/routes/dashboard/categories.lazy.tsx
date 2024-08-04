import CategoriesPages from "@/pages/admin/categories"
import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createLazyFileRoute("/dashboard/categories")({
  component: React.memo(CategoriesPages),
})
