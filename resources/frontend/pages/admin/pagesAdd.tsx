import PagesAddContent from "@/components/organisms/pagesAddContent"
import { Route } from "@/routes/__root"
import UnauthorisedError from "../errors/UnauthorisedError"

export default function PagesAdd() {
  const { auth } = Route.useRouteContext()
  if (auth.user?.role !== "admin") return <UnauthorisedError />
  return <PagesAddContent />
}
