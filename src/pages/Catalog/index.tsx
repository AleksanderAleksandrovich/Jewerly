import { BreadCrumbs } from '@/components/BreadCrambs'
import { Outlet } from 'react-router-dom'
type Props = {}

const Catalog = () => {
  return (
    <div className='px-[4rem] pt-[3.5rem]'>
      <BreadCrumbs />
      <Outlet />
    </div>
  )
}

export default Catalog
