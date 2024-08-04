import SubscriptionsPages from "@/pages/admin/subscriptions"
import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createLazyFileRoute("/dashboard/subscriptions")({
  component: React.memo(SubscriptionsPages),
})
