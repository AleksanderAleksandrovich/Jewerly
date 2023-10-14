import Burger from '@/assets/icons/Бургер.svg'
import { useState } from 'react'
import { SelectedPage } from '@/types/home'
import BurgerCatalog from '@/assets/icons/BurgerCatalog.svg'
import PartButtonLink from './PartButtonLink'
import Catalog from './Catalog'
import ButtonBurgerCatalog from '../Buttons/ButtonBurgerCatalog'
import Button from '../Buttons/Button'
import useMediaQuery from '@/hooks/useMediaQuery'
import ButtonPage from '../Buttons/ButtonPage'
import Contact from '@/assets/icons/Контакты.svg'
import PersonLogin from '@/assets/icons/Person.svg'
import Arow from '@/assets/icons/ArowCatalogButton.svg'
import Cross from '@/assets/icons/Cross.svg'
import { motion } from 'framer-motion'
type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
}

function ContentCatalog({
  selectedPage,
  setSelectedPage,
  isCatalogOpen,
}: Props & { isCatalogOpen: boolean }) {
  if (isCatalogOpen) return <Catalog />
  return (
    <>
      <ButtonPage className="py-4" page="Войти в аккаунт" img={PersonLogin} />
      <div className="h-[1px] bg-primary-500" />
      <PartButtonLink
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="h-[1px] bg-primary-500" />
      <ButtonPage className="pt-4" page="Контакты" img={Contact} />
    </>
  )
}

function ContentMenu({ selectedPage, setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1300px)')
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false)
  if (isAboveMediumScreen)
    return (
      <>
        <Catalog />
        <div className="h-[1px] bg-primary-500" />
        <ButtonPage className="pt-4" page="Контакты" img={Contact} />
      </>
    )
  return (
    <>
      <ButtonBurgerCatalog
        imgRight={Arow}
        page="Каталог"
        img={BurgerCatalog}
        onClick={() => setIsCatalogOpen(!isCatalogOpen)}
      />

      <ContentCatalog
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isCatalogOpen={isCatalogOpen}
      />
    </>
  )
}

function MenuCatalog({ selectedPage, setSelectedPage }: Props) {
  return (
    <div className="absolute -left-[3.5rem] top-[3.5rem] flex w-[22rem] flex-col bg-secondary-400 px-14 py-8 text-green-850 sm:left-0 sm:w-[25rem] ">
      <ContentMenu
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

const CatalogButtonFullScreen = ({
  isBurgerOpen,
}: {
  isBurgerOpen: boolean
}) => {
  const content = isBurgerOpen ? Cross : Burger
  return (
    <div className="flex items-center justify-between gap-4">
      <img className="min-w-[1.4rem]" src={content} alt={content} />
      <span className="text-base tracking-tight">Каталог</span>
    </div>
  )
}

const CatalogButtonSmallScreen = ({
  isBurgerOpen,
}: {
  isBurgerOpen: boolean
}) => {
  const content = isBurgerOpen ? Cross : Burger
  return <img className="min-w-[1.4rem]" src={content} alt="burger" />
}

const ButtonCatalog = ({ selectedPage, setSelectedPage }: Props) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)
  const [isFirstClickButtonCatalog, setIsFirstClickButtonCatalog] =
    useState<boolean>(false)
  const isAboveMediumScreen = useMediaQuery('(min-width: 1300px)')
  const isAboveMobileScreen = useMediaQuery('(min-width: 768px)')

  const show = {
    opacity: 1,
    y: '-2rem',
  }
  const duration = isAboveMobileScreen ? 0.5 : 0
  const hide = isFirstClickButtonCatalog
    ? {
        opacity: 0,
        y: '2rem',
      }
    : {
        display: 'none',
      }
  return (
    <>
      <Button
        buttonProps={{
          className:
            'flex h-9 items-center rounded-full border-[1px] border-primary-500 bg-transparent px-4 py-2',
          onClick: () => {
            setIsBurgerOpen(!isBurgerOpen)
            setIsFirstClickButtonCatalog(true)
          },
        }}
      >
        {isAboveMediumScreen ? (
          <CatalogButtonFullScreen isBurgerOpen={isBurgerOpen} />
        ) : (
          <CatalogButtonSmallScreen isBurgerOpen={isBurgerOpen} />
        )}
      </Button>

      <motion.div
        initial={hide}
        animate={isBurgerOpen ? show : hide}
        transition={{ duration: duration }}
      >
        <MenuCatalog
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </motion.div>
    </>
  )
}
export default ButtonCatalog
