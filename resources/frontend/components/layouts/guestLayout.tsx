import Footer from "../shared/footer"
import Header from "../shared/header"

interface GuestLayoutProps {
  children: React.ReactNode
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
