import { LucideIcon } from "lucide-react"

export enum TransitionType {
  Blur = "Blur",
  Collapse = "Collapse",
  Fade = "Fade",
  Grow = "Grow",
  Slide = "Slide",
  Zoom = "Zoom",
}

export type Item = {
  name: string
  path?: string
  dropdown?: Item[]
  submenu?: Item[]
}

export interface SubmenuProps {
  trigger: string
  children: React.ReactNode
}

export interface MenuLinkProps {
  children: React.ReactNode
  path: string
  unauth?: boolean
  pathname: string
}

export interface NavLinkProps extends SideLink {
  subLink?: boolean
  closeNav: () => void
}

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: LucideIcon
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

// Data tables
export interface SearchParams {
    [key: string]: string | string[] | undefined
}

export type Option = {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
}

export interface DataTableFilterOption<TData> {
    id?: string
    label: string
    value: keyof TData | string
    items: Option[]
    isMulti?: boolean
}

export interface DataTableSearchableColumn<TData> {
    id: keyof TData
    title: string
}

export interface DataTableFilterableColumn<TData>
    extends DataTableSearchableColumn<TData> {
    options: Option[]
}
