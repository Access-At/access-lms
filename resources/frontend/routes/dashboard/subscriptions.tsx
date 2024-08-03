import SubscriptionsPages from "@/pages/admin/subscriptions"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/dashboard/subscriptions")({
  component: React.memo(SubscriptionsPages),
})
