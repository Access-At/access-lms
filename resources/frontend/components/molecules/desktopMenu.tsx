import DesktopMenuItem from "./desktopMenuItem"

export default function DesktopMenu() {
  return (
    <div className='hidden w-full grow basis-full transition-all duration-300 sm:block'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7'>
        <DesktopMenuItem />
      </div>
    </div>
  )
}
