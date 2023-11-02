import { Outlet } from 'react-router-dom'
type Props = {}

const Catalog = () => {
  return (
    <>
      <div className="mx-14 h-[1px] w-[calc(100%-7rem)] bg-primary-500" />
      <Outlet/>
    </>
  )
}

export default Catalog
