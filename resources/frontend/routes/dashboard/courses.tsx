import CoursesPages from "@/pages/admin/courses"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/dashboard/courses")({
  component: React.memo(CoursesPages),
})
