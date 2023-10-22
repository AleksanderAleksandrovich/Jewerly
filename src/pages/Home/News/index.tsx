import { SelectedPage } from '@/types/home'
import { motion } from 'framer-motion'
import ItemsStore from '@/db/db.json'
import ShopingCard from '@/components/ShopingCard'
import useMediaQuery from '@/hooks/useMediaQuery'
import Star from '@/assets/icons/Зирочка.svg'
import { ButtonPageWithArrow } from '@/components/Buttons/ButtonPageWithArrow'
import Section from '@/components/Section'
import StarsWithLine from  "@/assets/photo/Звездочки с палочкой.png"
type Props = {
  setSelectedPage: (val: SelectedPage) => void
}
const NewsModileScreen = () => (
  <>
    <h2 className="mx-auto font-bergamasco text-[3rem] whitespace-nowrap">Новое поступление</h2>
    <div className="mx-auto mt-6">
      {ItemsStore.map((item) => (
        <ShopingCard key={item.id} {...item} />
      ))}
    </div>
    <div className="flex justify-end">
      <ButtonPageWithArrow style="w-[14.8rem] text-[1.5rem]">
        СМОТРЕТЬ ВСЕ
      </ButtonPageWithArrow>
    </div>
    <img className="absolute -bottom-[5rem] left-0" src={Star} alt="star" />
  </>
)
const NewsMediumScreen = () => {
  const firstTwoEl = ItemsStore.slice(0, 2)
  const secondTwoEl = ItemsStore.slice(2)

  return (
    <>
      <h2 className="mx-auto font-bergamasco sm:text-[5rem] md:text-[6.1rem] md:whitespace-nowrap">
        Новое поступление
      </h2>
      <table className="w-full table-auto border-collapse">
        <tbody className="border-y-[1px] border-primary-500">
          <tr>
            <td className="border-r-[1px] border-primary-500 pt-8">
              {firstTwoEl.map((item) => (
                <div key={item.id} className="mb-8 flex justify-start">
                  <ShopingCard {...item} />
                </div>
              ))}
            </td>
            <td className="border-l-[1px] border-primary-500 pt-8">
              {secondTwoEl.map((item) => (
                <div key={item.id} className="mb-8 flex justify-end">
                  <ShopingCard {...item} />
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end">
        <ButtonPageWithArrow style="w-[15.2rem] md:w-[17.2rem] text-[1.7rem] md:text-[2rem] ">
          СМОТРЕТЬ ВСЕ
        </ButtonPageWithArrow>
      </div>
      <img
        className="absolute bottom-2 right-[calc(50%-23px)]"
        src={Star}
        alt="star"
      />
    </>
  )
}

const NewsFullScreen = () => (
  <>
    <div className='flex items-end justify-between'>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="font-bergamasco xl:text-[7rem] 2xl:text-[7.9rem] whitespace-nowrap"
      >
        Новое поступление
      </motion.h2>
      <img className='xl:hidden 2xl:block h-[10.625rem] w-[6.5rem]' src={StarsWithLine} alt="starsWithLines" />
    </div>
    <table className="relative w-full table-auto border-collapse ">
      <tbody className="border-y-[1px] border-primary-500">
        <tr>
          {ItemsStore.map((item, index) => (
            <td
              key={item.id}
              className={`px-auto py-[3.3rem] 
              ${
                index === 0
                  ? 'pl-0 2xl:pl-[5.6rem]'
                  : 'border-l-[1px] border-primary-500'
              } 
              ${index === ItemsStore.length - 1 ? 'pr-0 2xl:pr-[5.6rem]' : ''}`}
            >
              <div className="flex justify-center">
                <ShopingCard {...item} />
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
    <div className="flex justify-end">
      <ButtonPageWithArrow style="w-[17.2rem]  text-[2rem]">
        СМОТРЕТЬ ВСЕ
      </ButtonPageWithArrow>
    </div>
  </>
)
const NewsContent = () => {
  const isAboveFullScreen = useMediaQuery('(min-width: 1300px)')
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')
  if (isAboveFullScreen) return <NewsFullScreen />
  if (isAboveMediumScreen) return <NewsMediumScreen />
  return <NewsModileScreen />
}
const News = ({ setSelectedPage }: Props) => {
  return (
    <Section id={SelectedPage.Новинки}>
      <motion.div
        className="relative mx-auto flex flex-col"
        onViewportEnter={() => setSelectedPage(SelectedPage.Новинки)}
      >
        <NewsContent />
      </motion.div>
    </Section>
  )
}

export default News
