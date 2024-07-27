import { TransitionType } from "@/lib/types"
import { Link } from "@tanstack/react-router"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui"
import { LazyImage } from "./lazy-image"

interface CourseCardProps {
  title: string
  description: string
  category: string
}

export default function CardCourse({
  title,
  description,
  category,
}: CourseCardProps) {
  return (
    <Card className='group flex h-full flex-col rounded-xl border border-gray-300 bg-background shadow-sm'>
      <CardHeader className='flex h-52 flex-col items-center justify-center rounded-t-xl p-0'>
        <LazyImage
          src='https://via.placeholder.com/300'
          transition={TransitionType.Grow}
          alt='course image'
          className='h-full w-full rounded-t-xl object-cover'
        />
      </CardHeader>
      <div className='p-4 md:p-6'>
        <span className='mb-1 block text-xs font-semibold uppercase text-blue-600'>
          {category}
        </span>
        <CardTitle className='text-xl font-semibold text-gray-800'>
          {title}
        </CardTitle>
        <CardDescription className='mt-3 text-gray-500'>
          {description}
        </CardDescription>
      </div>
      <CardFooter className='mt-auto flex divide-x divide-gray-200 border-t border-gray-300 p-0'>
        <Link
          className='inline-flex w-full items-center justify-center gap-x-2 rounded-es-xl bg-background px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50'
          to='/'
          // href='/course-detail'
        >
          Lihat Kursus
        </Link>
      </CardFooter>
    </Card>
  )
}
