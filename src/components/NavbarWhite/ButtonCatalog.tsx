import Burger from '@/assets/icons/Меню темное.svg'
import { useState } from 'react'
import BurgerCatalog from '@/assets/icons/BurgerCatalog.svg'
import Catalog from '@/components/Navbar/Catalog'
import ButtonBurgerCatalog from '../Buttons/ButtonBurgerCatalog'
import Button from '../Buttons/Button'
import useMediaQuery from '@/hooks/useMediaQuery'
import { ButtonPageWithImg } from '../Buttons/ButtonPage'
import Contact from '@/assets/icons/Контакты.svg'
import PersonLogin from '@/assets/icons/Person.svg'
import Arow from '@/assets/icons/ArowCatalogButton.svg'
import Cross from '@/assets/icons/Крест_черный_как_красный_только_черный.svg'
import { motion } from 'framer-motion'
import Delivery from '@/assets/icons/Доставка твоей мамаши.svg'

type Props = {}

function ContentCatalog({ isCatalogOpen }: { isCatalogOpen: boolean }) {
  if (isCatalogOpen) return <Catalog />
  return (
    <>
      <ButtonPageWithImg
        className="py-4"
        page="Войти в аккаунт"
        img={PersonLogin}
      />
      <div className="h-[1px] bg-primary-500" />
      <Button buttonProps={{ className: 'text-[1.5rem] text-start py-[1rem]' }}>
        Оплата и доставка
      </Button>
      <Button buttonProps={{ className: 'text-[1.5rem] text-start pb-[1rem]' }}>
        Контакты
      </Button>
      <div className="h-[1px] bg-primary-500" />
      <ButtonPageWithImg
        className="pt-4"
        page="+7 (971) 607-23-94"
        img={Contact}
      />
    </>
  )
}

function ContentMenu() {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1300px)')
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false)
  if (isAboveMediumScreen)
    return (
      <>
        <Catalog />
        <div className="h-[1px] bg-primary-500" />
        <ButtonPageWithImg
          className="pt-4"
          page="+7 (971) 607-23-94"
          img={Contact}
        />
      </>
    )
  return (
    <>
      <ButtonBurgerCatalog
        imgRight={Arow}
        page="Каталог"
        imgLeft={BurgerCatalog}
        onClick={() => setIsCatalogOpen(!isCatalogOpen)}
        isCatalogOpen={isCatalogOpen}
      />

      <ContentCatalog isCatalogOpen={isCatalogOpen} />
    </>
  )
}

function MenuCatalog() {
  return (
    <div className="absolute -left-[7rem] top-[4.6rem] flex w-[22rem] flex-col bg-secondary-400 px-14 py-8 text-green-850 sm:-left-[3.5rem] sm:w-[25rem] xl:-left-[8.3rem] ">
      <ContentMenu />
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

const ButtonCatalog = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)
  const isAboveMediumScreen = useMediaQuery('(min-width: 1300px)')
  const isAboveMobileScreen = useMediaQuery('(min-width: 768px)')

  const show = {
    opacity: 1,
    y: '-2rem',
    display: 'block',
  }
  const duration = isAboveMobileScreen ? 0.5 : 0
  const hide = {
    opacity: 0,
    y: '2rem',
    transitionEnd: { display: 'none' },
  }

  return (
    <>
      <Button
        buttonProps={{
          className:
            'flex h-9 items-center rounded-full border-[1px] border-green-850 bg-transparent px-4 py-2',
          onClick: () => {
            setIsBurgerOpen(!isBurgerOpen)
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
        <MenuCatalog />
      </motion.div>
    </>
  )
}
export default ButtonCatalog
