import Footer from "../organisms/footer"
import Header from "../organisms/header"

interface GuestLayoutProps {
  children: React.ReactNode
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <div className='min-h-screen w-full max-w-full'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
