import PhotoFirstScreen from '@/assets/photo/Фото первого экрана.png'
import Ring from '@/assets/photo/Ellipse 330.png'
import Catalog from '@/assets/photo/Фоно на кнопке.png'
import Button from '@/components/Buttons/Button'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/types/home'
import BrlliantWithLines from '@/components/BrilliantWithLines'
import Section from '@/components/Section'
import RombWithArrow from '@/assets/icons/Ромб со стреочкой.png'
type Prop = {
  setSelectedPage: (val: SelectedPage) => void
}

const MobileScreenJeverly = () => {
  return (
    <>
      <h1 className="mt-28 font-bergamasco text-[4rem] text-white">
        Ювелирные
      </h1>
      <h1 className="-mt-10 text-right font-bergamasco text-[4rem] text-white">
        украшения
      </h1>
      <div className="-mt-5 ml-auto mr-0">
        <h2 className="text-[1.5rem]">Ваш путь к сиянию</h2>
        <h2 className="text-[1.5rem]">и элегантности</h2>
      </div>

      <Button buttonProps={{ className: 'relative mt-[2rem]' }}>
        <div>
          <img
            className="mx-auto max-h-[16.5rem]"
            src={Catalog}
            alt="catalog"
          />
          <div
            className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-[0.9rem] text-white before:absolute 
            before:left-1/2 before:top-full before:h-[1px] before:w-[5rem] before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:bg-white"
          >
            ПЕРЕЙТИ В КАТАЛОГ
          </div>
          <img
            className="absolute -bottom-6 right-[calc(50%-1.75rem)] h-[3.5rem]"
            src={RombWithArrow}
            alt=""
          />
        </div>
      </Button>
      <div className="mx-auto h-[4.65rem] w-[1px] bg-primary-500"></div>
      <div
        className=" relative ml-[1.7rem] before:absolute before:-right-[3rem] before:-top-[3.5rem] before:z-[-1] before:h-[30rem] before:w-[35rem] before:bg-blic1 before:bg-cover after:absolute after:-bottom-32 after:-left-32  after:z-[-1] after:h-[25rem] after:w-[25rem] 
       after:bg-blic2 after:bg-cover"
      >
        <img
          className="mx-auto max-h-[32rem]"
          src={PhotoFirstScreen}
          alt="photo"
        />
      </div>
      <div className="mx-auto mb-[3rem] mt-[2.4rem]">
        <img className="max-h-[6.37rem]" src={Ring} alt="ring" />
      </div>
    </>
  )
}
const FullScreenJeverly = () => {
  return (
    <>
      <div className="relative w-[28.5%]">
        <div className="absolute left-1/2 top-0 z-[-1] h-full w-[1px] bg-primary-500"></div>
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          variants={{
            hidden: { y: -50 },
            visible: { y: 0 },
          }}
          className="mx-auto sm:mt-[43rem] sm:max-h-[9rem] md:max-h-[12rem] xl:mt-[35rem] xl:max-h-full"
          src={Ring}
          alt="ring"
        />
      </div>
      <div className="w-[70%] ">
        {/* text */}
        <div className="mt-28 flex flex-col sm:-ml-[12rem] md:-ml-[14rem] xl:-ml-[18rem]">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2 }}
            variants={{
              hidden: { y: -80 },
              visible: { y: 0 },
            }}
            className="font-bergamasco text-white sm:text-[6.87rem] xl:text-9xl"
          >
            Ювелирные
          </motion.h1>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2 }}
            variants={{
              hidden: { y: 80 },
              visible: { y: 0 },
            }}
            className="text-center font-bergamasco text-white sm:-mt-[5rem] sm:ml-0 sm:text-[6.87rem] md:ml-[16rem] xl:-mt-8 xl:ml-[15rem] xl:text-9xl"
          >
            украшения
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1, duration: 1.2 }}
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" sm:-mt-8 sm:ml-auto sm:mr-[8.75rem] xl:-mt-2  xl:ml-[45rem] 2xl:ml-[55rem] "
          >
            <h2 className="whitespace-nowrap sm:text-[2rem] xl:text-4xl">
              Ваш путь к сиянию
            </h2>
            <h2 className="whitespace-nowrap sm:text-[2rem] xl:text-4xl">
              и элегантности
            </h2>
          </motion.div>
        </div>

        {/*  image center and right */}
        <div className="flex sm:mt-4 xl:-mt-6 ">
          <div className="relative mb-24 w-2/3 ">
            <div
              className="before:absolute before:z-[-1] before:h-[45rem] before:w-[45rem] before:bg-blic1 before:bg-cover
              after:absolute after:-bottom-32 after:-left-32 after:z-[-1] after:h-[25rem] after:w-[25rem] after:bg-blic2 after:bg-cover 
      before:sm:-right-[8rem] before:sm:-top-[8.5rem] before:xl:-right-[5rem] before:xl:-top-[10rem]"
            >
              <img
                className="mx-auto max-h-[47rem]"
                src={PhotoFirstScreen}
                alt="photo"
              />
            </div>
          </div>
          <Button buttonProps={{ className: 'sm:mt-8 xl:mt-16 w-1/3' }}>
            <div className="flex h-full flex-col">
              <div className="relative">
                <img
                  className="mx-auto sm:max-h-[14rem] md:max-h-[18.75rem] xl:max-h-full"
                  src={Catalog}
                  alt="catalog"
                />
                <div
                  className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-white before:absolute before:left-1/2 
            before:top-full before:h-[1px] before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:bg-white sm:text-[0.7rem] before:sm:w-[7rem] md:text-[1rem] xl:text-[1.5rem] before:xl:w-[10rem]"
                >
                  ПЕРЕЙТИ В КАТАЛОГ
                </div>
                <img
                  className="absolute -bottom-4 right-[calc(50%-1.25rem)] h-[2.5rem] 2xl:-bottom-5 2xl:right-[calc(50%-1.5rem)] 2xl:h-[3rem]"
                  src={RombWithArrow}
                  alt=""
                />
              </div>
              <div className="mx-auto w-[1px] flex-1 bg-primary-500"></div>
            </div>
          </Button>
        </div>
      </div>
    </>
  )
}

const JewerlyContent = () => {
  const isAboveFullScreen = useMediaQuery('(min-width: 768px)')
  if (isAboveFullScreen) return <FullScreenJeverly />
  return <MobileScreenJeverly />
}
const Jewerly = ({ setSelectedPage }: Prop) => {
  return (
    <>
      <Section id={SelectedPage.Главная} className={'pt-0 sm:pt-0 '}>
        <motion.div
          className="flex flex-col sm:flex-row sm:justify-between"
          onViewportEnter={() => setSelectedPage(SelectedPage.Главная)}
        >
          <JewerlyContent />
        </motion.div>
        <BrlliantWithLines />
      </Section>
    </>
  )
}

export default Jewerly
