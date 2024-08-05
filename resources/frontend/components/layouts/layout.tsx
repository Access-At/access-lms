import { Outlet } from "@tanstack/react-router"
import Footer from "../molecules/footer"
import Header from "../molecules/header"
export default function Layout() {
  return (
    <div className='min-h-screen w-full max-w-full'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
