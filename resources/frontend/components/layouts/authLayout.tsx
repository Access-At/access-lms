import Footer from "../molecules/footer"
import Header from "../molecules/header"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='min-h-screen w-full max-w-full'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
