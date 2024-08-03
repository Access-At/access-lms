import Pagescontent from "@/components/organisms/pagesContent"
import { useAuth } from "@/contexts"

export default function Pages() {
  const { user } = useAuth()
  return user?.role === "admin" && <Pagescontent />
}
