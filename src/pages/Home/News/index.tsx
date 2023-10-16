import { SelectedPage } from '@/types/home'
import { motion } from 'framer-motion'
import ItemsStore from '@/db/db.json'
import ShopingCard from '@/components/ShopingCard'
import Button from '@/components/Buttons/Button'
import Arrow from '@/assets/icons/Стрелочка на некоторых кнопках.svg'
import useMediaQuery from '@/hooks/useMediaQuery'
import Star from '@/assets/icons/Зирочка.svg'
type Props = {
  setSelectedPage: (val: SelectedPage) => void
}
const NewsModileScreen = () => (
  <>
    <h2 className="mx-auto font-bergamasco text-[3rem]">Новое поступление</h2>
    <div className='mx-auto mt-6'>
      {ItemsStore.map((item) => (
        <ShopingCard key={item.id} {...item} />
      ))}
    </div>
    <div className="flex justify-end">
      <Button
        iconRight={<img src={Arrow} alt="" />}
        buttonProps={{
          className:
            'w-[14.8rem] py-2 flex tracking-tight whitespace-nowrap text-[1.5rem] justify-betwine items-center gap-[1.5rem] text-white border-b-[1px] border-white',
        }}
      >
        СМОТРЕТЬ ВСЕ
      </Button>
    </div>
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
                <div className="mb-8 flex justify-start">
                  <ShopingCard key={item.id} {...item} />
                </div>
              ))}
            </td>
            <td className="border-l-[1px] border-primary-500 pt-8">
              {secondTwoEl.map((item) => (
                <div className="mb-8 flex justify-end">
                  <ShopingCard key={item.id} {...item} />
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end">
        <Button
          iconRight={<img src={Arrow} alt="arrow" />}
          buttonProps={{
            className:
              'w-[17.2rem] py-2 flex tracking-tight whitespace-nowrap text-[2rem] justify-betwine items-center gap-[1.5rem] text-white border-b-[1px] border-white',
          }}
        >
          СМОТРЕТЬ ВСЕ
        </Button>
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
              className={`px-auto py-[3.3rem] ${
                index === 0
                  ? 'pl-[5.6rem]'
                  : 'border-l-[1px] border-primary-500'
              } ${index === ItemsStore.length - 1 ? 'pr-[5.6rem]' : ''}`}
            >
              <div className="flex justify-center">
                <ShopingCard key={item.id} {...item} />
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
    <div className="flex justify-end">
      <Button
        iconRight={<img src={Arrow} alt="" />}
        buttonProps={{
          className:
            'w-[17.2rem] py-2 flex tracking-tight whitespace-nowrap text-[2rem] justify-betwine items-center gap-[1.5rem] text-white border-b-[1px] border-white',
        }}
      >
        СМОТРЕТЬ ВСЕ
      </Button>
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
