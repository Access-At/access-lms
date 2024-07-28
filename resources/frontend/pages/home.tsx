import HomeSkeleton from "@/components/skeleton/homeSkeleton";
import React from "react";

const Hero = React.lazy(() => import("@/components/organisms/hero"))
const Feature = React.lazy(() => import("@/components/organisms/feature"))
const JobPosition = React.lazy(() => import("@/components/organisms/jobPosition"))
const Team = React.lazy(() => import("@/components/organisms/team"))
const Blog = React.lazy(() => import("@/components/organisms/blog"))

export default function Home() {
  return (
    <main className='mx-auto max-w-[85rem]'>
      <React.Suspense fallback={<HomeSkeleton />}>
        <Hero />
        <Feature />
        <JobPosition />
        <Blog />
        <Team />
      </React.Suspense>
    </main>
  )
}
