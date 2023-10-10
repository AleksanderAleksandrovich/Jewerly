import Burger from '@/assets/icons/Бургер.svg'
import { useState } from 'react'
import ButtonLink from './ButtonLink'
import { SelectedPage } from '@/types/home'
import ButtonPage from './ButtonPage'
import Braslate from '@/assets/icons/Браслеты.svg'
import ForHim from '@/assets/icons/Для него.svg'
import Ring from '@/assets/icons/Кольца.svg'
import Pendants from '@/assets/icons/Кулоны и медальоны.svg'
import Earrings from '@/assets/icons/Серьги.svg'
import ForWedding from '@/assets/icons/Для свадьбы.svg'
import Brilliant from '@/assets/icons/Brilliant.svg'

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
  isAboveMediumScreen: boolean
}

const ButtonCatalog = ({
  selectedPage,
  setSelectedPage,
  isAboveMediumScreen,
}: Props) => {
  const [isOpenCatalog, setIsOpenCatalog] = useState<boolean>(true)
  return (
    <>
      <button
        className=" h-9 rounded-full border-[1px] border-primary-500 bg-transparent px-4"
        onClick={() => setIsOpenCatalog(!isOpenCatalog)}
      >
        {isAboveMediumScreen ? (
          <div className="flex items-center justify-between gap-4">
            <img src={Burger} alt="burger" />
            <div className="text-base tracking-tight">Каталог</div>
          </div>
        ) : (
          <img className="min-w-[1.4rem]" src={Burger} alt="burger" />
        )}
      </button>
      {/* bg-secondary-400 */}
      {isOpenCatalog && (
        <div className="absolute left-0 top-[3.72rem] flex w-[25rem] flex-col bg-secondary-400 px-14 py-8 text-green-850">
          <div className="flex flex-col gap-2 pb-4">
            <ButtonPage page="Новинки" img={Brilliant}/>
            <ButtonPage page="Кулоны и медальоны" img={Pendants}/>
            <ButtonPage page="Кольца" img={Ring}/>
            <ButtonPage page="Серьги" img={Earrings}/>
            <ButtonPage page="Браслеты" img={Braslate}/>
            <ButtonPage page="Для свадьбы" img={ForWedding}/>
            <ButtonPage page="Для него" img={ForHim}/>
          </div>
          <div className='h-[1px] bg-primary-500'/>
          {!isAboveMediumScreen && (
            <div className="flex flex-col gap-2 pt-4">
              <ButtonLink
                isAboveMediumScreen={isAboveMediumScreen}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page="Главная"
              />
              <ButtonLink
                isAboveMediumScreen={isAboveMediumScreen}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page="Бриллиант"
              />
              <ButtonLink
                isAboveMediumScreen={isAboveMediumScreen}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page="Новинки"
              />
              <ButtonLink
                isAboveMediumScreen={isAboveMediumScreen}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page="Категории"
              />
              <ButtonLink
                isAboveMediumScreen={isAboveMediumScreen}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page="Заказ в подарок"
              />
              <ButtonLink
                isAboveMediumScreen={isAboveMediumScreen}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page="Уход"
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}
export default ButtonCatalog
