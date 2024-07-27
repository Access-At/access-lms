import { Link } from "@tanstack/react-router"
import { FaGithub, FaGoogle, FaSlack } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className='mx-auto mt-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <div>
          <Link
            className='flex-none text-xl font-semibold uppercase text-black'
            to='/'
            aria-label='Brand'
          >
            Access LMS
          </Link>
        </div>

        <div className='mt-3'>
          <p className='text-gray-500'>
            We&apos;re part of the{" "}
            <Link
              className='font-semibold text-blue-600 hover:text-blue-700'
              to='/'
            >
              Htmlstream
            </Link>{" "}
            family.
          </p>
          <p className='text-gray-500'>
            © Preline. 2022 Htmlstream. All rights reserved.
          </p>
        </div>

        <div className='mt-3 space-x-2'>
          <Link
            className='inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50'
            to='/'
          >
            <FaGoogle />
          </Link>
          <Link
            className='inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50'
            to='/'
          >
            <FaXTwitter />
          </Link>
          <Link
            className='inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50'
            href='https://github.com/Access-at'
          >
            <FaGithub />
          </Link>
          <Link
            className='inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50'
            to='/'
          >
            <FaSlack />
          </Link>
        </div>
      </div>
    </footer>
  )
}
