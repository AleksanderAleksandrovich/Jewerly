import Burger from '@/assets/icons/Бургер.svg'
import { useState } from 'react'
import { SelectedPage } from '@/types/home'
import BurgerCatalog from '@/assets/icons/BurgerCatalog.svg'
import PartButtonLink from './PartButtonLink'
import Catalog from './Catalog'
import ButtonBurgerCatalog from '../Buttons/ButtonBurgerCatalog'

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
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false)

  function ContentCatalog() {
    if (isCatalogOpen) return <Catalog />
    return (
      <PartButtonLink
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    )
  }
  function ContentBurger() {
    if (isAboveMediumScreen) return <Catalog />
    return (
      <div>
        <ButtonBurgerCatalog
          page="Каталог"
          img={BurgerCatalog}
          onClick={() => setIsCatalogOpen(!isCatalogOpen)}
        />
        <div className="h-[1px] bg-primary-500" />
        <ContentCatalog />
      </div>
    )
  }
  function BurgerOpen() {
    if (!isBurgerOpen) return
    return (
      <div className="absolute left-0 top-[3.72rem] flex w-[25rem] flex-col bg-secondary-400 px-14 py-8 text-green-850 ">
        <ContentBurger />
      </div>
    )
  }
  return (
    <>
      <button
        className="flex h-9 items-center rounded-full border-[1px] border-primary-500 bg-transparent px-4 py-2"
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
      >
        {isAboveMediumScreen ? (
          <div className="flex items-center justify-between gap-4">
            <img src={Burger} alt="burger" />
            <span className="text-base tracking-tight">Каталог</span>
          </div>
        ) : (
          <img className="min-w-[1.4rem]" src={Burger} alt="burger" />
        )}
      </button>
      {isBurgerOpen && <BurgerOpen />}
    </>
  )
}
export default ButtonCatalog
