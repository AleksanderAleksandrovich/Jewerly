import { SelectedPage } from '@/types/home'
import { motion } from 'framer-motion'
import ItemsStore from '@/db/db.json'
import ShopingCard from '@/components/ShopingCard'
import useMediaQuery from '@/hooks/useMediaQuery'
import Star from '@/assets/icons/Зирочка.svg'
import { ButtonPageWithArrow } from '@/components/Buttons/ButtonPageWithArrow'
type Props = {
  setSelectedPage: (val: SelectedPage) => void
}
const NewsModileScreen = () => (
  <>
    <h2 className="mx-auto font-bergamasco text-[3rem]">Новое поступление</h2>
    <div className="mx-auto mt-6">
      {ItemsStore.map((item) => (
        <ShopingCard key={item.id} {...item} />
      ))}
    </div>
    <div className="flex justify-end">
      <ButtonPageWithArrow style="w-[14.8rem]   text-[1.5rem]    ">
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
      <h2 className="mx-auto font-bergamasco text-[6.875rem]">
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
        <ButtonPageWithArrow style="w-[17.2rem]  text-[2rem] ">
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
    <h2 className="font-bergamasco text-[8rem]">Новое поступление</h2>
    <table className="before:bg-StarsWithLine relative w-full table-auto border-collapse before:absolute before:-top-[10.6rem] before:right-[5rem] before:z-10 before:h-[10.625rem] before:w-[6.5rem]">
      <tbody className="border-y-[1px] border-primary-500">
        <tr>
          {ItemsStore.map((item, index) => (
            <td
              key={item.id}
              className={`px-auto py-[3.3rem] 
              ${
                index === 0
                  ? 'pl-[5.6rem]'
                  : 'border-l-[1px] border-primary-500'
              } 
              ${index === ItemsStore.length - 1 ? 'pr-[5.6rem]' : ''}`}
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

const News = ({ setSelectedPage }: Props) => {
  const isAboveFullScreen = useMediaQuery('(min-width: 1300px)')
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')
  return (
    <section id="новинки" className="mx-24 pt-28 sm:mx-14 sm:pt-24">
      <motion.div
        className="relative mx-auto flex flex-col"
        onViewportEnter={() => setSelectedPage(SelectedPage.Новинки)}
      >
        {isAboveFullScreen ? (
          <NewsFullScreen />
        ) : isAboveMediumScreen ? (
          <NewsMediumScreen />
        ) : (
          <NewsModileScreen />
        )}
      </motion.div>
    </section>
  )
}

export default News
