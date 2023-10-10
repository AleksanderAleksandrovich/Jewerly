import useMediaQuery from '@/hooks/useMediaQuery'
import Burger from '../../assets/icons/Бургер.svg'
import { useState } from 'react'
import ButtonLink from './ButtonLink'
import { SelectedPage } from '@/types/home'

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
      {isOpenCatalog && (
        <div className="absolute left-0 top-[3.72rem] flex w-[25rem] flex-col bg-secondary-400 px-14 py-8 text-green-850">
          {!isAboveMediumScreen && (
            <div className="flex flex-col gap-2">
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
