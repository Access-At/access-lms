import { LazyImage } from '@/components/ui'
import { TransitionType } from '@/components/ui/lazy-image'
import { getImages } from '@/lib/utils'

export default function index() {
  const images = getImages()

  return (
    <>
      {images.slice(0, 16).map((src, i) => (
        <LazyImage src={src} transition={TransitionType.Blur} key={i} className='h-100' alt='asd'   />
      ))}
    </>
  )
}
