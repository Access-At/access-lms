import * as React from "react"

import {
  Card,
  CardDescription,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui"

import Autoscroll from "embla-carousel-auto-scroll"
import { ChevronRight } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"
import { jobPositions } from "@/constant/jobPositions"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export default function JobPosition() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const direction = isDesktop ? 'forward' : 'backward'


  const [plugin, setPlugin] = React.useState(() =>
    Autoscroll({
      direction: direction,
    })
  );

  React.useEffect(() => {
    const newPlugin = Autoscroll({
      direction: direction,
    });
    setPlugin(newPlugin);
  }, [direction]);

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin]}
      orientation={isDesktop ? "horizontal" : "vertical"}
      onMouseEnter={plugin.stop}
      onMouseLeave={() => plugin.play(100)}
      className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14'
    >
      <CarouselContent className={cn(!isDesktop && "h-[400px]")}>
        {jobPositions.map((item, index) => (
          <CarouselItem
            key={index}
            className={
              isDesktop
                ? "space-x-2 md:basis-1/2 lg:basis-1/4"
                : "basis-1/4 space-y-4"
            }
          >
            <Link href='#'>
              <Card className='group flex flex-col rounded-xl border border-gray-300 bg-background shadow-sm transition hover:shadow-md'>
                <div className='p-4 md:p-5'>
                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                      <CardTitle className='text-lg font-semibold text-gray-800 group-hover:text-blue-600'>
                        {item.title}
                      </CardTitle>
                      <CardDescription className='text-sm text-gray-500'>
                        {item.amount} job positions
                      </CardDescription>
                    </div>
                    <ChevronRight className='h-5 w-5 text-gray-500' />
                  </div>
                </div>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className='border-none bg-slate-900 text-slate-100 hover:bg-slate-700 hover:text-slate-100' />
      <CarouselNext className='border-none bg-slate-900 text-slate-100 hover:bg-slate-700 hover:text-slate-100' /> */}
    </Carousel>
  )
}
