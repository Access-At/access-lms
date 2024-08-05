import SettingsPages from "@/pages/admin/settings"
import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createLazyFileRoute("/_layout-dashboard/dashboard/settings")({
  component: React.memo(SettingsPages),
})