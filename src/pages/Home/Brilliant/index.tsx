import TextDescription from '@/components/TextComponents/TextDescription'
import { SelectedPage } from '@/types/home'
import { motion } from 'framer-motion'
import BigBrilliant from '@/assets/photo/БриллиантБольшой.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import Section from '@/components/Section'
type Props = {
  setSelectedPage: (val: SelectedPage) => void
}
const BrilliantMobile = () => (
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
      <div className="relative mb-8 before:absolute before:-bottom-[8rem] before:right-[calc(50%-10.5rem)] before:z-[-1] before:h-[20rem] before:w-[21rem] before:bg-blicForBril before:bg-cover">
        <img
          className="mx-auto max-h-[18rem]"
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
const BrilliantMedium = () => (
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
      className="mb-[2rem] text-center font-bergamasco text-[6.875rem] leading-[7rem]"
    >
      Бриллиант идеален для выдающихся украшений
    </motion.h2>
    <div className="mt-6 flex items-center">
      <div className="relative w-4/6 before:absolute before:-bottom-[8rem] before:right-[18rem] before:z-[-1] before:h-[20rem] before:w-[21rem] before:bg-blicForBril before:bg-cover">
        <img className="max-h-[25rem] " src={BigBrilliant} alt="bigBrilliant" />
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
        className="flex w-2/6 flex-col"
      >
        <TextDescription spanProps={{ className: 'text-right' }}>
          Вес: 0.25-2 карата
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right' }}>
          Цвет: G-H (почти бесцветный)
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right' }}>
          Чистота: VS1-VS2
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right' }}>
          Огранка: Отличная
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right' }}>
          Блеск: Яркий и многогранный
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right' }}>
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
        className="ml-auto w-1/3 flex-col"
      >
        <TextDescription spanProps={{ className: ' text-[2rem]' }}>
          Вес: 0.25-2 карата
        </TextDescription>
        <TextDescription spanProps={{ className: ' text-[2rem]' }}>
          Цвет: G-H (почти бесцветный)
        </TextDescription>
        <TextDescription spanProps={{ className: ' text-[2rem]' }}>
          Чистота: VS1-VS2
        </TextDescription>
      </motion.div>
      <div className="relative mb-8 w-1/3 before:absolute before:-bottom-[8rem] before:right-[calc(50%-10.5rem)] before:z-[-1] before:h-[20rem] before:w-[21rem] before:bg-blicForBril before:bg-cover">
        <img
          className="mx-auto max-h-[25rem]"
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
        className="flex w-1/3 flex-col"
      >
        <TextDescription spanProps={{ className: 'text-right text-[2rem]' }}>
          Огранка: Отличная
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right text-[2rem]' }}>
          Блеск: Яркий и многогранный
        </TextDescription>
        <TextDescription spanProps={{ className: 'text-right text-[2rem]' }}>
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
  if (isMediumScreen) return <BrilliantMedium />
  return <BrilliantMobile />
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
