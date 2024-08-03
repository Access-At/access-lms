import Pagescontent from "@/components/organisms/pagesContent"
import { useAuth } from "@/contexts"

export default function PagesAdmin() {
  const { user } = useAuth()
  return user?.role === "admin" && <Pagescontent />
}
