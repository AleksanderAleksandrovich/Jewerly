import Brilliant from '@/assets/icons/Бриллиант темный.svg'
import InputSearch from './InputSearch'
import Heart from '@/assets/icons/Избранное темное.svg'
import Basket from '@/assets/icons/Магазин темный.svg'
import Exite from '@/assets/icons/Выход темный.svg'
import useMediaQuery from '@/hooks/useMediaQuery'
import Button from '../Buttons/Button'
import { useBasketStore } from '@/store/buying'
import { useState } from 'react'
import BrilOrange from '@/assets/icons/Brilliant.svg'
import ButtonCatalog from './ButtonCatalog'
import { NavLink } from 'react-router-dom'

const LoginPart = () => (
  <div className="flex items-center gap-4">
    <Button buttonProps={{ className: 'text-[1.25rem]' }}>Войти</Button>
    <Button buttonProps={{ className: 'min-h-[1.1rem] min-w-[1.1rem]' }}>
      <img src={Exite} alt="exite" />
    </Button>
  </div>
)

const Navbar = () => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1300px)')
  const jewerlyItem = useBasketStore((state) => state.jewerlyItems)

  const countJeverly = jewerlyItem.reduce((acc, item) => acc + item?.count, 0)
  const smallText = countJeverly > 9 ? 'text-[0.7rem]' : 'text-[1rem]'
  const [isHoverBasket, setIsHoverBasket] = useState<boolean>(false)
  return (
    <nav className="bg-noise-white sticky top-0 z-30 -mx-[1.6875rem]">
      <div className="mx-6 mb-0 flex h-[120px] items-center gap-3 border-x-[1px] border-primary-500 px-28 pb-7 pt-16 text-green-850 sm:px-14 xl:gap-[3rem] ">
        {/* left side */}
        <div className="relative flex w-[40%] items-center">
          <ButtonCatalog />
          {isAboveMediumScreen && (
            <>
              <Button buttonProps={{ className: 'text-[1.25rem] mx-[1rem]' }}>
                <NavLink to="">Контакты</NavLink>
              </Button>
              <Button
                buttonProps={{ className: 'text-[1.25rem] whitespace-nowrap' }}
              >
                <NavLink to="">Оплата и доставка</NavLink>
              </Button>
            </>
          )}
        </div>
        {/* center side */}
        <div className="flex w-[20%] justify-center gap-10 2xl:ml-10">
          <div className="min-w-[2.6rem]">
            <NavLink to="/">
              <img src={Brilliant} alt="brilliant" />
            </NavLink>
          </div>
        </div>
        {/* right side navbar*/}
        <div className="flex w-[40%] items-center justify-end gap-[1rem] ">
          <InputSearch />
          <Button buttonProps={{ className: 'min-h-[1.3rem] min-w-[1.3rem]' }}>
            <img src={Heart} alt="heart" />
          </Button>

          <Button
            buttonProps={{
              onMouseEnter: () => setIsHoverBasket(true),
              onMouseLeave: () => setIsHoverBasket(false),
              className:
                'relative flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-green-850 p-2.5 pb-3 ',
            }}
          >
            <img className="min-w-[1.125rem]" src={Basket} alt="basket" />

            {countJeverly > 0 && (
              <div
                className={`${smallText} absolute -right-[0.6rem] -top-[0.4rem] flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full bg-green-850 text-[0.6rem] text-white`}
              >
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
      </div>
    </nav>
  )
}

export default Navbar
