import Blog from "@/components/shared/blog"
import Feature from "@/components/shared/feature"
import Hero from "@/components/shared/hero"
import JobPosition from "@/components/shared/jobPosition"
import Team from "@/components/shared/team"

export default function Home() {
  return (
    <main className='mx-auto max-w-[85rem]'>
      <Hero />
      <Feature />
      <JobPosition />
      <Blog />
      <Team />
    </main>
  )
}
