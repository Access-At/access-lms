import { Route } from "@/routes/__root"
import UnauthorisedError from "../errors/UnauthorisedError"

export default function CategoriesPages() {
  const { auth } = Route.useRouteContext()
  if (auth.user?.role !== "admin") return <UnauthorisedError />
  return <div>Categories</div>
}
