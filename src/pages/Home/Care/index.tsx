import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/types/home'
import { motion } from 'framer-motion'
import Brilliant from '@/assets/icons/БрилиантNavbar.svg'
import Advice1 from '@/assets/photo/1 тезис.png'
import Advice2 from '@/assets/photo/2 тезис.png'
import Advice3 from '@/assets/photo/3 тезис.png'
import Star from '@/assets/photo/Звездочка на палочке.png'
import CardAdvice from './CardAdvice'
import Section from '@/components/Section'
type Props = { setSelectedPage: (val: SelectedPage) => void }

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.9 } },
}

const CareFullScreen = () => {
  return (
    <>
      <div className="mr-[8rem] flex items-center justify-between">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="whitespace-nowrap font-bergamasco text-[8rem]"
        >
          Сохраните блеск
        </motion.h2>
        <img className="xl:h-[5rem] 2xl:h-[7.125rem]" src={Brilliant} alt="brilliant" />
        <img className='2xl:block hidden' src={Star} alt="star" />
      </div>
      <div className="mb-[5rem] h-[1px] w-full bg-primary-500" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="flex justify-between"
      >
        <div className="w-[32%]">
          <CardAdvice
            number="01"
            description="Храните в мягких сумочках или футлярах, чтобы избежать царапин."
            img={Advice1}
          />
        </div>
        <div className="w-[32%]">
          <CardAdvice
            number="02"
            description="Избегайте контакта с химикатами, парфюмами и косметикой."
            img={Advice2}
          />
        </div>
        <div className="w-[32%]">
          <CardAdvice
            number="03"
            description="Регулярно чистите мягкой щеткой, водой и моющим средством."
            img={Advice3}
          />
        </div>
      </motion.div>
    </>
  )
}

const CareMediumScreen = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-bergamasco text-[5rem] md:text-[6.87rem] ">Сохраните блеск</h2>
        <img className="h-[4rem] md:h-[7.125rem]" src={Brilliant} alt="brilliant" />
      </div>
      <div className="mb-[5rem] h-[1px] w-full bg-primary-500" />
      <div className="flex flex-col">
        <CardAdvice
          number="01"
          description="Храните в мягких сумочках или футлярах, чтобы избежать царапин."
          img={Advice1}
        />
      </div>
      <div className="-mt-[10rem] flex flex-col">
        <CardAdvice
          number="02"
          description="Избегайте контакта с химикатами, парфюмами и косметикой."
          img={Advice2}
        />
      </div>
      <div className="-mt-[10rem] flex flex-col">
        <CardAdvice
          number="03"
          description="Регулярно чистите мягкой щеткой, водой и моющим средством."
          img={Advice3}
        />
      </div>
    </>
  )
}

const CareMobileScreen = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-bergamasco text-[3rem] ">Сохраните блеск</h2>
        <img src={Brilliant} alt="brilliant" />
      </div>
      <CardAdvice
        number="01"
        description="Храните в мягких сумочках или футлярах, чтобы избежать царапин."
        img={Advice1}
      />
      <CardAdvice
        number="02"
        description="Избегайте контакта с химикатами, парфюмами и косметикой."
        img={Advice2}
      />
      <CardAdvice
        number="03"
        description="Регулярно чистите мягкой щеткой, водой и моющим средством."
        img={Advice3}
      />
    </>
  )
}

const CareContent = () => {
  const isAboveFullScreen = useMediaQuery('(min-width: 1300px)')
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')
  if (isAboveFullScreen) return <CareFullScreen />
  if (isAboveMediumScreen) return <CareMediumScreen />
  return <CareMobileScreen />
}

const Care = ({ setSelectedPage }: Props) => {
  return (
    <Section id={SelectedPage.Уход}>
      <motion.div
        className="mx-auto mb-12 flex flex-col"
        onViewportEnter={() => setSelectedPage(SelectedPage.Уход)}
      >
        <CareContent />
      </motion.div>
    </Section>
  )
}

export default Care
