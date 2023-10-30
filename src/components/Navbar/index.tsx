import Brilliant from '@/assets/icons/БрилиантNavbar.svg'
import ButtonCatalog from './ButtonCatalog'
import InputSearch from './InputSearch'
import Heart from '@/assets/icons/Избранное.svg'
import Basket from '@/assets/icons/Корзина.svg'
import Exite from '@/assets/icons/Выход.svg'
import { SelectedPage } from '@/types/home'
import useMediaQuery from '@/hooks/useMediaQuery'
import { ButtonLinkWithLine } from '../Buttons/ButtonLink'
import Button from '../Buttons/Button'
import { useBasketStore } from '@/store/buying'
import { useState } from 'react'
import BrilOrange from '@/assets/icons/Brilliant.svg'

type Prop = {
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
}

const PartButtonsLinkLeft = ({ selectedPage }: Pick<Prop, 'selectedPage'>) => (
  <div className="flex justify-between gap-2 2xl:gap-4">
    <ButtonLinkWithLine selectedPage={selectedPage} page="Главная" />
    <ButtonLinkWithLine selectedPage={selectedPage} page="Бриллиант" />
    <ButtonLinkWithLine selectedPage={selectedPage} page="Новинки" />
  </div>
)

const PartButtonsLinkRight = ({ selectedPage }: Pick<Prop, 'selectedPage'>) => (
  <div className="flex items-center justify-between gap-3">
    <ButtonLinkWithLine selectedPage={selectedPage} page="Категории" />
    <ButtonLinkWithLine selectedPage={selectedPage} page="Заказ в подарок" />
    <ButtonLinkWithLine selectedPage={selectedPage} page="Уход" />
  </div>
)
const LoginPart = () => (
  <div className="flex items-center gap-4">
    <Button buttonProps={{ className: 'text-[1.25rem]' }}>Войти</Button>
    <Button buttonProps={{ className: 'min-h-[1.1rem] min-w-[1.1rem]' }}>
      <img src={Exite} alt="exite" />
    </Button>
  </div>
)

const Navbar = ({ selectedPage, setSelectedPage }: Prop) => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1500px)')
  const jewerlyItem = useBasketStore((state) => state.jewerlyItem)

  const countJeverly = jewerlyItem.reduce((acc, item) => acc + item?.count, 0)

  const [isHoverBasket, setIsHoverBasket] = useState<boolean>(false)
  return (
    <nav className="bg-noise-green bg- sticky top-0 z-30 flex h-[120px] items-center gap-3 px-28 pb-7 pt-16 sm:px-14 xl:gap-[3rem]">
      {/* left side */}
      <div className="relative w-1/4">
        <ButtonCatalog
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      {/* center side */}
      <div className="flex w-1/2 justify-center gap-10 2xl:ml-10">
        {isAboveMediumScreen && (
          <PartButtonsLinkLeft selectedPage={selectedPage} />
        )}
        <div className="min-w-[2.6rem]">
          <img src={Brilliant} alt="brilliant" />
        </div>
        {isAboveMediumScreen && (
          <PartButtonsLinkRight selectedPage={selectedPage} />
        )}
      </div>
      {/* right side navbar*/}
      <div className="flex w-1/4 items-center justify-end gap-[1rem] ">
        <InputSearch />
        <Button buttonProps={{ className: 'min-h-[1.3rem] min-w-[1.3rem]' }}>
          <img src={Heart} alt="heart" />
        </Button>

        <Button
          buttonProps={{
            onMouseEnter: () => setIsHoverBasket(true),
            onMouseLeave: () => setIsHoverBasket(false),
            className:
              'relative flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-primary-500 p-2.5 pb-3 ',
          }}
        >
          <img className="min-w-[1.125rem]" src={Basket} alt="basket" />

          {countJeverly > 0 && (
            <div className="absolute -right-[0.7rem] -top-[0.6rem] flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-white text-[0.8rem]">
              {countJeverly > 99 ? '99+' : countJeverly}
            </div>
          )}

          {countJeverly === 0 && isHoverBasket && (
            <div className="absolute -bottom-[9.2rem] -left-[6.4rem] flex h-[8.75rem] w-14 flex-col items-center">
              <div
                className="ml-[7rem] mr-auto h-0 w-0 border-b-[1rem] 
                  border-l-[0.5rem] border-r-[0.5rem] border-b-secondary-400 
                  border-l-transparent border-r-transparent"
              />
              <div className="flex w-[15.6rem] flex-col items-center bg-secondary-400 p-[1rem]">
                <img src={BrilOrange} alt="" />
                <span className="my-[0.5rem] text-[1.25rem] text-green-850">
                  Ваша корзина пуста
                </span>
                <span className="text-green-850 ">
                  Самое время добавить что-то незабываемое
                </span>
              </div>
            </div>
          )}
        </Button>

        {isAboveMediumScreen && <LoginPart />}
      </div>
    </nav>
  )
}

export default Navbar
