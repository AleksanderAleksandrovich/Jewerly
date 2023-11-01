import Footer from '@/components/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="layout-green">
      {/* Верхняя часть фиксед */}
      <div className="bg-noise-green fixed top-0 z-40 h-6 w-full">
        <div className="h-full" />
        <div className="mx-auto h-[1px] w-[calc(100%-3rem)] border-b-[1px] border-primary-500" />
      </div>
      <div className="m-6 mb-0 border-[1px] border-t-0 border-primary-500 px-[2px] pt-[1px] font-geo text-primary-500">
        <Outlet />
        <Footer />
      </div>

      <div className="bg-noise-green h-6 w-full">
        <div className="h-full" />
      </div>
    </div>
  )
}

export default AppLayout
