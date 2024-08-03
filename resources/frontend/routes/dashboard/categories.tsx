import CategoriesPages from "@/pages/admin/categories"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/dashboard/categories")({
  component: React.memo(CategoriesPages),
})
