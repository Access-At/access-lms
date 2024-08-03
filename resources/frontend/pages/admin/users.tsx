import UsersContent from "@/components/organisms/usersContent"
import { useAuth } from "@/contexts"

export default function UsersPages() {
  const { user } = useAuth()
  return user?.role === "admin" && <UsersContent />
}
