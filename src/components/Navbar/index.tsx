import Brilliant from '@/assets/icons/БрилиантNavbar.svg'
import ButtonCatalog from './ButtonCatalog'
import ButtonLink from './ButtonLink'
import InputSearch from './InputSearch'
import Heart from '@/assets/icons/Избранное.svg'
import Basket from '@/assets/icons/Корзина.svg'
import Exite from '@/assets/icons/Выход.svg'
import { SelectedPage } from '@/types/home'
import useMediaQuery from '@/hooks/useMediaQuery'

type Prop = {
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Prop) => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1300px)')
  return (
    <nav className="sticky  top-0 z-30 flex h-[120px] items-center gap-8 border-primary-500 bg-green-850 bg-noise px-14 pb-7 pt-16 xl:gap-16">
      {/* left side */}
      <div className="relative w-1/4">
        <ButtonCatalog
          isAboveMediumScreen={isAboveMediumScreen}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      {/* center side */}
      <div className="2xl:gap-10 flex w-1/2 items-center justify-center gap-3">
        {isAboveMediumScreen && (
          <div className="2xl:gap-4 flex justify-between gap-2">
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
          </div>
        )}
        <div className="mx-4 ">
          <img className="min-w-[2.625rem] " src={Brilliant} alt="brilliant" />
        </div>
        {isAboveMediumScreen && (
          <div className="flex items-center justify-between gap-3">
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
      {/* right side */}
      <div className="flex w-1/4 items-center justify-end gap-[1.4rem] xl:gap-[1.2rem]">
        <InputSearch />
        <div className="min-h-[1.3rem] min-w-[1.3rem]">
          <img src={Heart} alt="heart" />
        </div>
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-primary-500 px-2.5 pb-3 pt-2.5">
            <img src={Basket} alt="basket" />
          </div>
        </div>
        {isAboveMediumScreen && (
          <div className="flex items-center gap-4">
            <div>Войти</div>
            <div className="min-h-[1.1rem] min-w-[1.1rem]">
              <img src={Exite} alt="exite" />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
