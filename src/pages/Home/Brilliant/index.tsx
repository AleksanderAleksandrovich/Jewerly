import TextDescription from '@/components/TextComponents/TextDescription'
import { SelectedPage } from '@/types/home'
import { motion } from 'framer-motion'
import BigBrilliant from '@/assets/photo/БриллиантБольшой.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import Section from '@/components/Section'
type Props = {
  setSelectedPage: (val: SelectedPage) => void
}
const BrilliantMobileScreen = () => (
  <>
    <h2 className="mb-[2rem] text-center font-bergamasco text-[3rem] leading-tight">
      Бриллиант идеален для выдающихся украшений
    </h2>
    <div>
      <div className="ml-auto flex w-[75%] flex-col">
        <TextDescription spanProps={{ className: 'text-right' }}>
          Вес: 0.25-2 карата
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right' }}>
          Цвет: G-H (почти бесцветный)
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right' }}>
          Чистота: VS1-VS2
        </TextDescription>
      </div>
      <div className="relative mb-8 before:absolute before:-bottom-[8rem] before:right-[calc(50%-10.5rem)] before:h-[20rem] before:w-[21rem] before:bg-blicForBril before:bg-cover">
        <img
          className="mx-auto max-h-[18rem] relative z-10"
          src={BigBrilliant}
          alt="bigBrilliant"
        />
      </div>
      <div className="flex w-[75%] flex-col">
        <TextDescription>Огранка: Отличная</TextDescription>
        <TextDescription>Блеск: Яркий и многогранный</TextDescription>
        <TextDescription>Размер: 6.5 мм. в диаметре</TextDescription>
      </div>
    </div>
  </>
)
const BrilliantMediumScreen = () => (
  <>
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2 }}
      variants={{
        hidden: { y: -50 },
        visible: { y: 0 },
      }}
      className="mb-[2rem] text-center font-bergamasco text-[5.8rem] md:text-[6.875rem] leading-[7rem]"
    >
      Бриллиант идеален для выдающихся украшений
    </motion.h2>
    <div className="mt-6 flex items-center">
      <div className="relative w-[60%] before:absolute before:-bottom-[8rem] before:right-[calc(50%-9rem)] before:h-[20rem] before:w-[21rem] before:bg-blicForBril before:bg-cover">
        <img className="max-h-[21rem] md:max-h-[25rem] relative z-10" src={BigBrilliant} alt="bigBrilliant" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex w-[40%] flex-col"
      >
        <TextDescription spanProps={{ className: 'text-right sm:text-[1.2rem] md:text-[1.5rem]' }}>
          Вес: 0.25-2 карата
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right sm:text-[1.2rem] md:text-[1.5rem]' }}>
          Цвет: G-H (почти бесцветный)
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right sm:text-[1.2rem] md:text-[1.5rem]' }}>
          Чистота: VS1-VS2
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right sm:text-[1.2rem] md:text-[1.5rem]' }}>
          Огранка: Отличная
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right sm:text-[1.2rem] md:text-[1.5rem]' }}>
          Блеск: Яркий и многогранный
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right sm:text-[1.2rem] md:text-[1.5rem]' }}>
          Размер: 6.5 мм. в диаметре
        </TextDescription>
      </motion.div>
    </div>
  </>
)
const BrilliantFullScreen = () => (
  <>
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="mb-[2rem] px-32 text-center font-bergamasco text-[8rem] leading-[7rem]"
    >
      Бриллиант идеален для выдающихся украшений
    </motion.h2>
    <div className="mt-[7.5rem] flex justify-between gap-[1.6rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="ml-auto xl:w-[30%] 2xl:w-1/3 flex-col"
      >
        <TextDescription spanProps={{ className: 'xl:text-[1.4rem] 2xl:text-[2rem]' }}>
          Вес: 0.25-2 карата
        </TextDescription>
        <TextDescription spanProps={{ className: ' xl:text-[1.4rem] 2xl:text-[2rem]' }}>
          Цвет: G-H (почти бесцветный)
        </TextDescription>
        <TextDescription spanProps={{ className: ' xl:text-[1.4rem] 2xl:text-[2rem]' }}>
          Чистота: VS1-VS2
        </TextDescription>
      </motion.div>
      <div className="relative mb-8 xl:w-[40%] 2xl:w-1/3 before:absolute before:-bottom-[8rem] before:right-[calc(50%-10rem)] before:h-[20rem] before:w-[21rem] before:bg-blicForBril before:bg-cover">
        <img
          className="mx-auto max-h-[25rem] relative z-10"
          src={BigBrilliant}
          alt="bigBrilliant"
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex xl:w-[30%] 2xl:w-1/3  flex-col"
      >
        <TextDescription spanProps={{ className: 'text-right xl:text-[1.4rem] 2xl:text-[2rem]' }}>
          Огранка: Отличная
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right xl:text-[1.4rem] 2xl:text-[2rem]' }}>
          Блеск: Яркий и многогранный
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right xl:text-[1.4rem] 2xl:text-[2rem]' }}>
          Размер: 6.5 мм. в диаметре
        </TextDescription>
      </motion.div>
    </div>
  </>
)
const BrilliantContent = () => {
  const isAboveFullScreen = useMediaQuery('(min-width: 1300px)')
  const isMediumScreen = useMediaQuery('(min-width: 768px)')
  if (isAboveFullScreen) return <BrilliantFullScreen />
  if (isMediumScreen) return <BrilliantMediumScreen />
  return <BrilliantMobileScreen />
}
const Brilliant = ({ setSelectedPage }: Props) => {
  return (
    <Section id={SelectedPage.Бриллиант}>
      <motion.div
        className="mx-auto flex flex-col"
        onViewportEnter={() => setSelectedPage(SelectedPage.Бриллиант)}
      >
        <BrilliantContent />
      </motion.div>
    </Section>
  )
}

export default Brilliant
