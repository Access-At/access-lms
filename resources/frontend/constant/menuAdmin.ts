import { LayoutDashboard, type LucideIcon } from "lucide-react";

export interface NavLink {
    title: string
    label?: string
    href: string
    icon: LucideIcon
  }
  
  export interface SideLink extends NavLink {
    sub?: NavLink[]
  }
  
  export const sidelinks: SideLink[] = [
    {
      title: 'Dashboard',
      label: '',
      href: '/admin',
      icon: LayoutDashboard,
    }
]
  