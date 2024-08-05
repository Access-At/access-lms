import UsersContent from "@/components/organisms/usersContent"
import { Route } from "@/routes/__root"
import UnauthorisedError from "../errors/UnauthorisedError"

export default function UsersPages() {
  const { auth } = Route.useRouteContext()
  if (auth.user?.role !== "admin") return <UnauthorisedError />
  return <UsersContent />
}
