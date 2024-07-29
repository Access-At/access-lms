import * as React from "react"

import Home from "@/pages/home"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/_index/")({
  component: React.memo(Home),
})
