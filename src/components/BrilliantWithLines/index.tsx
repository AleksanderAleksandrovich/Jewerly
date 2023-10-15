import Brilliant from '@/assets/icons/БрилиантNavbar.svg'

const BrlliantWithLines = () => {
  return (
    <>
      <div className="mx-auto h-[1px] w-[80%] bg-primary-500 sm:w-[100%]" />
      <div className="my-4">
        <img className="mx-auto" src={Brilliant} alt="brilliant" />
      </div>
      <div className="mx-auto h-[1px] w-[70%] bg-primary-500 sm:w-[70%]" />
    </>
  )
}

export default BrlliantWithLines
