import { materiCourse } from "@/constant/materiCourse"
import CourseLink from "../atoms/courseLink"
import CardCourse from "../molecules/cardCourse"

export default function Blog() {
  return (
    <div className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
      <div className='mx-auto mb-10 max-w-2xl text-center lg:mb-14'>
        <h2 className='text-2xl font-bold md:text-4xl md:leading-tight'>
          Kursus Materi Terbaru
        </h2>
        <p className='mt-1 text-gray-600'>
          Kursus Materi Terbaru memberikan pembelajaran terkini di berbagai
          bidang, membantu pembelajar mengembangkan pengetahuan dan keterampilan
          sesuai dengan perkembangan industri dan ilmu pengetahuan.
        </p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {materiCourse.map((item, index) => (
          <CardCourse key={index} {...item} />
        ))}
      </div>
      <CourseLink />
    </div>
  )
}
