import Pagescontent from "@/components/organisms/pagesContent"
import { Route } from "@/routes/__root"
import UnauthorisedError from "../errors/UnauthorisedError"

export default function PagesAdmin() {
  const { auth } = Route.useRouteContext()
  if (auth.user?.role !== "admin") return <UnauthorisedError />
  return <Pagescontent />
}
