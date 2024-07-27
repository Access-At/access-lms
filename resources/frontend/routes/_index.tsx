import GuestLayout from "@/components/layouts/guestLayout"
import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_index")({
  component: () => (
    <GuestLayout>
      <Outlet />
    </GuestLayout>
  ),
})
