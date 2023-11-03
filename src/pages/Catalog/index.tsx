import { BreadCrumbs } from '@/components/BreadCrambs'
import Slider from '@/components/Slider'
import { Outlet } from 'react-router-dom'
type Props = {}

const Catalog = () => {
  return (
    <div className="px-[4rem] pt-[3.5rem]">
      <BreadCrumbs />
      <div className="-mx-[5.6875rem]">
        <Slider />
      </div>
      <div className="mx-auto my-4 h-[1px] w-full bg-primary-500" />
      <Outlet />
    </div>
  )
}

export default Catalog
