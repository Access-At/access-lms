interface LoadingProps {
  title: string
}

export default function Loading({title}: LoadingProps) {
  return (
    <div className='flex h-screen items-center justify-center flex-col'>
      <div className='relative inline-flex gap-3'>
        <span className='sr-only'>Loading...</span>
        <div className='h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-5 w-5 bg-primary rounded-full animate-bounce'></div>
      </div>
      <p className='animate-pulse text-sm my-3'>{title}</p>
    </div>
  )
}
