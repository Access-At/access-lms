interface LoadingProps {
  title: string
}

export default function Loading({ title }: LoadingProps) {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='relative inline-flex gap-3'>
        <span className='sr-only'>Loading...</span>
        <div className='h-5 w-5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]'></div>
        <div className='h-5 w-5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]'></div>
        <div className='h-5 w-5 animate-bounce rounded-full bg-primary'></div>
      </div>
      <p className='my-3 animate-pulse text-sm'>{title}</p>
    </div>
  )
}
