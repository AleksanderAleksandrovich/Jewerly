import Brilliant from '@/assets/icons/БрилиантNavbar.svg'
import { useLocation } from 'react-router-dom'

export const BrlliantWithLines = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/' ? (
        <div className="mx-auto h-[1px] w-[100%] bg-primary-500 sm:w-[100%]" />
      ) : (
        <div className="mx-auto h-[1px] w-[100%] " />
      )}
      <div className="my-4">
        <img className="mx-auto" src={Brilliant} alt="brilliant" />
      </div>
      <div className="mx-auto h-[1px] w-[70%] bg-primary-500" />
    </>
  )
}
