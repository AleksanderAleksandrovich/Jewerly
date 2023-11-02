import { BreadCrumbs } from '@/components/BreadCrambs'
import Slider from '@/components/Slider'
import { Outlet } from 'react-router-dom'
type Props = {}

const Catalog = () => {
  return (
    <div className="px-[4rem] pt-[3.5rem]">
      <BreadCrumbs />
      <div className='-mx-[5.6875rem]'>
        <Slider />
      </div>
      <Outlet />
    </div>
  )
}

export default Catalog
