import CoursesPages from "@/pages/admin/courses"
import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createLazyFileRoute("/dashboard/courses")({
  component: React.memo(CoursesPages),
})
