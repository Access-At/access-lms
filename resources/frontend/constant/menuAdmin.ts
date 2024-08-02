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
    href: "/admin",
    icon: Gauge,
  },
  {
    title: "Pages",
    label: "",
    href: "/admin/pages",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    label: "",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Batches",
    label: "",
    href: "/admin/batches",
    icon: BookA,
  },
  {
    title: "Categoirs",
    label: "",
    href: "/admin/categories",
    icon: ChartBarStacked,
  },
  {
    title: "Courses",
    label: "",
    href: "/admin/courses",
    icon: BookText,
  },
  {
    title: "Settings",
    label: "",
    href: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Reports",
    label: "",
    href: "/admin/reports",
    icon: MessageCircleWarning,
  },
  {
    title: "Subscription",
    label: "",
    href: "/admin/subscription",
    icon: Podcast,
  },
]
