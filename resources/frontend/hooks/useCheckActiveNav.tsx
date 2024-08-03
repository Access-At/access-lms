import { useLocation } from "@tanstack/react-router"

export default function useCheckActiveNav() {
  const { pathname } = useLocation()

  const checkActiveNav = (nav: string) => {
    const check = nav === pathname
    return check
  }

  return { checkActiveNav }
}
