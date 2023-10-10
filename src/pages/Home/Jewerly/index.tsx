import Brilliant from '@/assets/icons/БрилиантNavbar.svg'
import PhotoFirstScreen from '@/assets/photo/Фото первого экрана.png'
import Ring from '@/assets/photo/Ellipse 330.png'
import Catalog from '@/assets/photo/Фоно на кнопке.png'
const Jewerly = () => {
  return (
    <>
      <section
        id="главная"
        className="mx-14 border-b-[1px]  border-t-[1px] border-primary-500 "
      >
        <div className="flex">
          <div className=" relative w-1/4">
            <div className="absolute left-1/2 top-0 z-[-1] h-full w-[1px] bg-primary-500"></div>
            <img className="mx-auto mt-[35rem]" src={Ring} alt="ring" />
          </div>
          <div className="w-3/4 ">
            {/* text */}
            <div className="mt-28 flex flex-col">
              <h1 className="-ml-56 font-bergamasco text-9xl text-white">
                Ювелирные
              </h1>
              <h1 className="-mt-8 mr-60 text-right font-bergamasco text-9xl text-white">
                украшения
              </h1>
              <div className="-mt-2 ml-auto mr-60">
                <h2 className="text-4xl">Ваш путь к сиянию</h2>
                <h2 className="text-4xl">и элегантности</h2>
              </div>
            </div>

            {/*  image center and right */}
            <div className="xl:-mt-10 mt-4 flex ">
              <div className="relative  mb-24 w-2/3">
                <div
                  className="before:absolute  before:-top-10 before:right-24 before:z-[-1] before:h-[25rem] before:w-[28.1rem] before:bg-blic1 before:bg-cover after:absolute  after:-bottom-32 after:-left-32 after:z-[-1] 
              after:h-[25rem] after:w-[25rem] after:bg-blic2 after:bg-cover"
                >
                  <img className="mx-auto" src={PhotoFirstScreen} alt="photo" />
                </div>
              </div>
              <div className="mt-12 flex w-1/3 flex-col">
                <img className="mx-auto" src={Catalog} alt="" />
                <div className="mx-auto w-[1px] flex-1 bg-primary-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='my-4'>
        <img className="mx-auto" src={Brilliant} alt="brilliant" />
      </div>
      <div className='h-[1px] bg-primary-500 w-[70%] mx-auto'/>
    </>
  )
}

export default Jewerly
