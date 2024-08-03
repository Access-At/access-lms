import DashboardContent from "@/components/organisms/dashboardContent"
import { useAuth } from "@/contexts"

export const Dashboard = () => {
  const { user } = useAuth()
  return user?.role === "admin" && <DashboardContent />
}
