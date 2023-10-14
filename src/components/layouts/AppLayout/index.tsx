import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <div className="fixed top-0 z-40 mx-6 h-6 w-[calc(100%-3rem)] border-b-[1px] border-primary-500 bg-green-850 bg-noise" />
      <div className="m-6  border-[1px] border-t-0 border-primary-500 font-geo text-primary-500">
        <Outlet />
      </div>
    </>
  )
}

export default AppLayout
