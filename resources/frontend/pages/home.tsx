import Blog from "@/components/organisms/blog"
import Feature from "@/components/organisms/feature"
import Hero from "@/components/organisms/hero"
import JobPosition from "@/components/organisms/jobPosition"
import Team from "@/components/organisms/team"

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
