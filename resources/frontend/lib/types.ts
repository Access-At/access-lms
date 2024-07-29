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
