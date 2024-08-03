import SettingsPages from "@/pages/admin/settings"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/dashboard/settings")({
  component: React.memo(SettingsPages),
})
