import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/types/home'
import { motion } from 'framer-motion'
import PresentPhoto from '@/assets/photo/Rectangle 27.png'
import Button from '@/components/Buttons/Button'
import Arrow from '@/assets/icons/Стрелочка на некоторых кнопках.svg'
type Props = {
  setSelectedPage: (val: SelectedPage) => void
}
const PresentMobileScreen = () => (
  <>
    <h2 className="mb-[2.56rem] text-center font-bergamasco text-[3rem]">
      Сделайте подарок особенным с нашими украшениями
    </h2>
    <div className="flex flex-col">
      <div className="mb-4">
        <img className="ml-0 max-h-[23.18rem]" src={PresentPhoto} alt="present" />
      </div>
      <div className="ml-auto mr-0 flex h-[31.5rem] w-[22.8rem] flex-col bg-secondary-400 px-[2.5rem] py-[2rem]">
        <h4 className="pr-4 text-[2rem] tracking-[-1.6px] text-green-850">
          Подарите блеск и красоту
        </h4>
        <h6 className="text-[1.25rem] tracking-[-1px] text-green-850">
          Закажи украшения в подарок и впечатли своих близких
        </h6>
        <Button
          iconRight={<img className="ml-[1rem]" src={Arrow} alt="arrow" />}
          buttonProps={{
            className:
              'flex items-center justify-center text-secondary-400 bg-green-850 mb-0 mt-auto h-[2rem] text-[1.25rem]',
          }}
        >
          Подарить украшение
        </Button>
      </div>
    </div>
  </>
)

const PresentMediumScreen = () => (
  <>
    <div className="mb-[1.5rem] h-[1px] w-full bg-primary-500" />
    <h2 className="mb-[5.65rem] text-center font-bergamasco text-[6.875rem] leading-[7rem]">
      Сделайте подарок особенным с нашими украшениями
    </h2>
    <div className="flex mx-auto gap-[8.7rem]">
      <div className="">
        <img className="max-h-[37.6rem]" src={PresentPhoto} alt="present" />
      </div>
      <div className="flex h-[34rem] w-[25rem] flex-col bg-secondary-400 px-[2.5rem] py-[2rem]">
        <h4 className="mr-12 text-[2.25rem] tracking-[-1.8px] text-green-850 mb-4 leading-[2.5rem]">
          Подарите блеск и красоту
        </h4>
        <h6 className="text-[1.5rem] tracking-[-1.2px] text-green-850 leading-[1.7rem]">
          Закажи украшения в подарок и впечатли своих близких
        </h6>
        <Button
          iconRight={<img className="ml-[1rem]" src={Arrow} alt="arrow" />}
          buttonProps={{
            className:
              'flex items-center justify-center text-secondary-400 bg-green-850 mb-0 mt-auto h-[2.5rem] text-[1.25rem]',
          }}
        >
          Подарить украшение
        </Button>
      </div>
    </div>
  </>
)
const PresentFullScreen = () => (
  <>
    <div className="mb-[1.7rem] h-[1px] w-full bg-primary-500" />
    <h2 className="mb-[5.65rem] text-center font-bergamasco text-[8rem] leading-[8rem]">
      Сделайте подарок особенным с нашими украшениями
    </h2>
    <div className="flex mx-auto gap-[17.5rem]">
      <div className="">
        <img className="max-h-[52.8rem]" src={PresentPhoto} alt="present" />
      </div>
      <div className="flex h-[34rem] w-[25rem] flex-col bg-secondary-400 px-[2.5rem] py-[2rem]">
        <h4 className="mr-4 text-[2.5rem] tracking-[-2px] text-green-850 mb-4 leading-[2.8rem]">
          Подарите блеск и красоту
        </h4>
        <h6 className="text-[1.5rem] tracking-[-1.2px] text-green-850 leading-[1.8rem]">
          Закажи украшения в подарок и впечатли своих близких
        </h6>
        <Button
          iconRight={<img className="ml-[1rem]" src={Arrow} alt="arrow" />}
          buttonProps={{
            className:
              'flex items-center justify-center text-secondary-400 bg-green-850 mb-0 mt-auto h-[3rem] text-[1.5rem]',
          }}
        >
          Подарить украшение
        </Button>
      </div>
    </div>
  </>
)

const PresentContent = () => {
  const isAboveFullScreen = useMediaQuery('(min-width: 1300px)')
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')
  if (isAboveFullScreen) return <PresentFullScreen />
  if (isAboveMediumScreen) return <PresentMediumScreen />
  return <PresentMobileScreen />
}
const Present = ({ setSelectedPage }: Props) => {
  return (
    <section id="заказвподарок" className="mx-24 pt-28 sm:mx-14 sm:pt-24">
      <motion.div
        className="mx-auto flex flex-col"
        onViewportEnter={() => setSelectedPage(SelectedPage.ЗаказВПодарок)}
      >
        <PresentContent />
      </motion.div>
    </section>
  )
}

export default Present
