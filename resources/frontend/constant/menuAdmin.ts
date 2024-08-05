import { SideLink } from "@/lib/types"
import {
  BookA,
  BookText,
  ChartBarStacked,
  Gauge,
  LayoutDashboard,
  MessageCircleWarning,
  Podcast,
  Settings,
  Users,
} from "lucide-react"

export const sidelinks: SideLink[] = [
  {
    title: "Dashboard",
    label: "",
    href: "/dashboard/overview",
    icon: Gauge,
  },
  {
    title: "Pages",
    label: "",
    href: "/dashboard/pages",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    label: "",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Batches",
    label: "",
    href: "/dashboard/batches",
    icon: BookA,
  },
  {
    title: "Categoirs",
    label: "",
    href: "/dashboard/categories",
    icon: ChartBarStacked,
  },
  {
    title: "Courses",
    label: "",
    href: "/dashboard/courses",
    icon: BookText,
  },
  {
    title: "Settings",
    label: "",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Reports",
    label: "",
    href: "/dashboard/reports",
    icon: MessageCircleWarning,
  },
  {
    title: "Subscriptions",
    label: "",
    href: "/dashboard/subscriptions",
    icon: Podcast,
  },
]
