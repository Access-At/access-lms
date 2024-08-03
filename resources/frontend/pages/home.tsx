import HomeSkeleton from "@/components/skeleton/homeSkeleton"
import React from "react"

const Hero = React.lazy(() => import("@/components/molecules/hero"))
const Feature = React.lazy(() => import("@/components/molecules/feature"))
const Category = React.lazy(() => import("@/components/molecules/category"))
const Team = React.lazy(() => import("@/components/molecules/team"))
const Blog = React.lazy(() => import("@/components/molecules/blog"))

export default function Home() {
  return (
    <main className='mx-auto max-w-[85rem]'>
      <React.Suspense fallback={<HomeSkeleton />}>
        <Hero />
        <Feature />
        <Category />
        <Blog />
        <Team />
      </React.Suspense>
    </main>
  )
}
