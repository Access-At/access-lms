import Layout from "@/components/layouts/layout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout")({
  component: Layout,
})