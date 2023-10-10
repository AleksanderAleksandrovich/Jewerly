import Burger from '@/assets/icons/Бургер.svg'
import { useState } from 'react'
import { SelectedPage } from '@/types/home'
import BurgerCatalog from '@/assets/icons/BurgerCatalog.svg'
import PartButtonLink from './PartButtonLink'
import Catalog from './Catalog'
import ButtonBurgerCatalog from './ButtonBurgerCatalog'

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
  return (
    <>
      <button
        className=" h-9 rounded-full border-[1px] border-primary-500 bg-transparent px-4"
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
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

      {isBurgerOpen && (
        <div className="absolute left-0 top-[3.72rem] flex w-[25rem] flex-col bg-secondary-400 px-14 py-8 text-green-850 ">
          {isAboveMediumScreen ? (
            <Catalog />
          ) : (
            <div>
              <ButtonBurgerCatalog
                page="Каталог"
                img={BurgerCatalog}
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
              />
              <div className="h-[1px] bg-primary-500" />
              {isCatalogOpen ? (
                <Catalog />
              ) : (
                <PartButtonLink
                  isAboveMediumScreen={isAboveMediumScreen}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}
export default ButtonCatalog
