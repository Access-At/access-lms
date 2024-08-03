import svg from "@/assets/svg/banner.svg"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"

export default function Hero() {
  return (
    <div
      className={cn(
        "relative mt-20 overflow-hidden before:absolute before:start-1/2 before:top-0 before:-z-[1] before:size-full before:-translate-x-1/2 before:transform before:bg-top before:bg-no-repeat",
        `before:bg-[url('${svg}')]`,
      )}
    >
      {/* https://preline.co/assets/svg/examples/squared-bg-element.svg */}
      <div className='px-4 pb-10 pt-24 sm:px-6 lg:px-8'>
        {/* <!-- Announcement Banner --> */}
        <div className='flex justify-center'>
          <Link
            className='inline-flex items-center gap-x-2 rounded-full border border-gray-300 bg-background p-2 px-3 text-xs text-gray-600 transition hover:border-gray-300'
            to='/'
          >
            Eksplorasi E-Learning Access
            <span className='flex items-center gap-x-1'>
              <span className='border-s border-gray-200 ps-2 text-blue-600'>
                Eksplorasi
              </span>
              <svg
                className='size-4 flex-shrink-0 text-blue-600'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m9 18 6-6-6-6' />
              </svg>
            </span>
          </Link>
        </div>
        {/* <!-- End Announcement Banner --> */}

        {/* <!-- Title --> */}
        <div className='mx-auto mt-5 max-w-xl text-center'>
          <h1 className='block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl'>
            Berani Tampil Beda
          </h1>
        </div>
        {/* <!-- End Title --> */}

        <div className='mx-auto mt-5 max-w-3xl text-center'>
          <p className='text-lg text-gray-600'>
            Belajar dipandu oleh para trainer secara daring atau tatap muka.
          </p>
        </div>
      </div>
    </div>
  )
}
