import * as React from "react"

import { Card, CardHeader } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"

import { useMediaQuery } from "@/hooks/useMediaQuery"
import { cn } from "@/lib/utils"
import Autoscroll from "embla-carousel-auto-scroll"
import { Skeleton } from "../ui/skeleton"

export default function HomeSkeleton() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const direction = isDesktop ? "forward" : "backward"

  const [plugin, setPlugin] = React.useState(() =>
    Autoscroll({
      direction: direction,
    }),
  )

  React.useEffect(() => {
    const newPlugin = Autoscroll({
      direction: direction,
    })
    setPlugin(newPlugin)
  }, [direction])

  return (
    <>
      {/* hero */}
      <Skeleton className='mt-20 h-52 w-full rounded-none bg-slate-300' />

      {/* Feature */}
      <div className='my-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <div className='grid items-start gap-12 sm:grid-cols-2 lg:grid-cols-3'>
          {[...Array(3).keys()].map((index: number) => (
            <div className='flex flex-col' key={index}>
              <Skeleton className='h-12 w-12 rounded bg-slate-300' />
              <div className='mt-5'>
                <Skeleton className='w-2/2 h-3 rounded bg-slate-300' />
                <Skeleton className='mt-3 h-3 w-1/2 rounded bg-slate-300' />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* jobPosition */}
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin]}
        orientation={isDesktop ? "horizontal" : "vertical"}
        onMouseEnter={plugin.stop}
        onMouseLeave={() => plugin.play(1000)}
        className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14'
      >
        <CarouselContent className={cn(!isDesktop && "h-[400px]")}>
          {[...Array(10).keys()].map((index: number) => (
            <CarouselItem
              key={index}
              className={
                isDesktop
                  ? "space-x-2 md:basis-1/2 lg:basis-1/4"
                  : "basis-1/4 space-y-4"
              }
            >
              <Skeleton className='w-2/2 h-3 rounded-xl bg-slate-300 p-9 shadow-sm md:p-10' />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Blog */}
      <div className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <div className='mx-auto mb-10 max-w-2xl text-center lg:mb-14'>
          <h2 className='text-2xl font-bold md:text-4xl md:leading-tight'>
            Kursus Materi Terbaru
          </h2>
          <p className='mt-1 text-gray-600'>
            Kursus Materi Terbaru memberikan pembelajaran terkini di berbagai
            bidang, membantu pembelajar mengembangkan pengetahuan dan
            keterampilan sesuai dengan perkembangan industri dan ilmu
            pengetahuan.
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {[...Array(4).keys()].map((index: number) => (
            <Card
              key={index}
              className='group flex h-full flex-col rounded-xl border border-gray-300 bg-background shadow-sm'
            >
              <CardHeader className='flex h-52 flex-col items-center justify-center rounded-t-xl p-0'>
                <Skeleton className='h-full w-full rounded-t-xl bg-slate-300 shadow-sm' />
              </CardHeader>
              <div className='p-4 md:p-6'>
                <span className='mb-1 block text-xs font-semibold uppercase text-blue-600'>
                  <Skeleton className='h-3 w-20 rounded bg-slate-300' />
                </span>
                <Skeleton className='h-6 w-2/3 rounded bg-slate-300' />
                <div className='mt-3'>
                  <Skeleton className='mb-1 h-4 w-full rounded bg-slate-200' />
                  <Skeleton className='mb-1 h-4 w-1/2 rounded bg-slate-200' />
                  <Skeleton className='h-4 w-2/3 rounded bg-slate-200' />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <div className='mb-10 text-center lg:mb-14'>
          <h2 className='text-2xl font-bold md:text-4xl md:leading-tight'>
            Temui kru
          </h2>
          <p className='mt-1 text-gray-600'>Mengisikan halaman data kru</p>
        </div>

        <div className='grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-3'>
          {[...Array(3).keys()].map((index: number) => (
            <div
              key={index}
              className='grid gap-x-4 gap-y-3 sm:flex sm:items-center'
            >
              <Skeleton className='h-20 w-20 rounded bg-slate-300' />
              <div className='sm:flex sm:h-full sm:flex-col'>
                <Skeleton className='mb-1 h-3 w-24 bg-slate-300' />
                <Skeleton className='h-3 w-12 bg-slate-300' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
