import { team } from "@/constant/team"
import { TransitionType } from "@/lib/types"
import { Link } from "@tanstack/react-router"
import { FaGithub, FaSlack } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { LazyImage } from "./lazy-image"

export default function Team() {
  return (
    <div className='px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
      <div className='mb-10 text-center lg:mb-14'>
        <h2 className='text-2xl font-bold md:text-4xl md:leading-tight'>
          Temui kru
        </h2>
        <p className='mt-1 text-gray-600'>Mengisikan halaman data kru</p>
      </div>

      <div className='grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-3'>
        {team.map((item, index) => (
          <div
            className='grid gap-x-4 gap-y-3 sm:flex sm:items-center'
            key={index}
          >
            <LazyImage
              src={item.image}
              transition={TransitionType.Grow}
              alt={item.name}
              style={{ width: 80, height: 80 }}
              className='rounded-lg'
            />

            <div className='sm:flex sm:h-full sm:flex-col'>
              <div>
                <h3 className='font-medium text-gray-800'>{item.name}</h3>
                <p className='mt-1 text-xs uppercase text-gray-500'>
                  {item.role}
                </p>
              </div>

              <div className='mt-2 space-x-2.5 sm:mt-auto'>
                {item.socials.map((item, index) => (
                  <Link
                    className='inline-flex items-center justify-center rounded-full text-gray-500 hover:text-gray-800'
                    href='#'
                    key={index}
                  >
                    {item.name === "Twitter" ? (
                      <FaXTwitter />
                    ) : item.name === "Github" ? (
                      <FaGithub />
                    ) : (
                      <FaSlack />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
