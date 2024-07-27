import { Link } from "@tanstack/react-router"
import { ChevronRight } from "lucide-react"
import { Badge } from "../ui"

export default function CourseLink() {
  return (
    <div className='mt-10 text-center'>
      <Badge
        variant='outline'
        className='gap-x-2 border border-gray-300 px-4 py-3 text-base font-normal'
      >
        <p className='text-gray-800'>Lihat seluruh kursus?</p>
        <Link
          className='inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 hover:underline'
          href='/courses'
        >
          Kunjungi
          <ChevronRight className='h-4 w-4' />
        </Link>
      </Badge>
    </div>
  )
}
