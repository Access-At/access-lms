import Overview from "@/pages/admin/overview"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute(
  "/_layout-dashboard/dashboard/overview",
)({
  component: Overview,
})
