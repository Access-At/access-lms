import { useFeatureQuery } from "@/features/public/feature"
import { useSuspenseQuery } from "@tanstack/react-query"

export default function Feature() {
  const { data: features } = useSuspenseQuery(useFeatureQuery())
  return (
    <div className='my-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
      <div className='grid items-start gap-12 sm:grid-cols-2 lg:grid-cols-3'>
        {features.data.map((item, index) => (
          <div className='flex flex-col' key={index}>
            <div className='relative flex size-12 items-center justify-center rounded-xl bg-background before:absolute before:-inset-px before:-z-[1] before:rounded-xl before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600'>
              {index + 1}
            </div>
            <div className='mt-5'>
              <h3 className='text-lg font-semibold text-gray-800'>
                {item.title}
              </h3>
              <p className='mt-1 text-gray-600'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
