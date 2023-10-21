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
import { useEffect, useRef, useState } from 'react'

type Prop = {
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
}

const PartButtonsLinkLeft = ({ selectedPage, setSelectedPage }: Prop) => (
  <div className="flex justify-between gap-2 2xl:gap-4">
    <ButtonLinkWithLine
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      page="Главная"
    />
    <ButtonLinkWithLine
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      page="Бриллиант"
    />
    <ButtonLinkWithLine
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      page="Новинки"
    />
  </div>
)

const PartButtonsLinkRight = ({ selectedPage, setSelectedPage }: Prop) => (
  <div className="flex items-center justify-between gap-3">
    <ButtonLinkWithLine
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      page="Категории"
    />
    <ButtonLinkWithLine
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      page="Заказ в подарок"
    />
    <ButtonLinkWithLine
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      page="Уход"
    />
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
  const isAboveMediumScreen = useMediaQuery('(min-width: 1300px)')
  const jewerlyItem = useBasketStore((state) => state.jewerlyItem)

  const countJeverly = jewerlyItem.reduce((acc, item) => acc + item?.count, 0)

  return (
    <nav className="bg-noise-green bg- sticky top-0 z-30 flex h-[120px] items-center gap-8 px-28 pb-7 pt-16 sm:px-14 xl:gap-[3rem]">
      {/* left side */}
      <div className="relative w-1/4">
        <ButtonCatalog
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      {/* center side */}
      <div className="flex w-1/2 justify-center gap-3 xl:ml-10 2xl:gap-10">
        {isAboveMediumScreen && (
          <PartButtonsLinkLeft
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <div className="min-w-[2.6rem]">
          <img src={Brilliant} alt="brilliant" />
        </div>
        {isAboveMediumScreen && (
          <PartButtonsLinkRight
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
      {/* right side navbar*/}
      <div className="flex w-1/4 items-center justify-end gap-[1.5rem] ">
        <InputSearch />
        <Button buttonProps={{ className: 'min-h-[1.3rem] min-w-[1.3rem]' }}>
          <img src={Heart} alt="heart" />
        </Button>
        <Button
          buttonProps={{
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
        </Button>

        {isAboveMediumScreen && <LoginPart />}
      </div>
    </nav>
  )
}

export default Navbar
