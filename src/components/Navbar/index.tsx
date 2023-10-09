import Brilliant from '@/assets/icons/БрилиантNavbar.svg'
import ButtonCatalog from './ButtonCatalog'
import ButtonLink from './ButtonLink'
import InputSearch from './InputSearch'
import Heart from '@/assets/icons/Избранное.svg'
import Basket from '@/assets/icons/Корзина.svg'
import Exite from '@/assets/icons/Выход.svg'
import { SelectedPage } from '@/types/home'
type Prop = {
  isPageTop: boolean
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
}
const Navbar = ({ selectedPage, setSelectedPage, isPageTop }: Prop) => {
  const stylePageTop = isPageTop
    ? ''
    : 'bg-noise bg-green-850 border-primary-500 border-x-[1px] border-t-[1px]'
  return (
    <nav className="">
      {!isPageTop && <div className="fixed -top-[1.5rem] z-30 w-full h-6 bg-green-850 bg-noise"></div>}
      <div
        className={`${stylePageTop} fixed left-[1.5rem] top-6 z-30 flex  h-[120px] w-[calc(100%-3rem)] items-center   gap-16  px-14  pb-[26px] pt-16`}
      >
        {/* left side */}
        <div className="w-1/4">
          <ButtonCatalog />
        </div>
        {/* center side */}
        <div className="flex w-1/2 justify-center gap-5">
          <div className="flex justify-between gap-3">
            <ButtonLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Главная"
            />
            <ButtonLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Бриллиант"
            />
            <ButtonLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Новинки"
            />
          </div>
          <div className="mx-4">
            <img src={Brilliant} alt="brilliant" />
          </div>
          <div className="flex justify-between gap-3">
            <ButtonLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Категории"
            />
            <ButtonLink
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
        </div>
        {/* right side */}
        <div className="flex w-1/4 items-center justify-end gap-[22px] ">
          <InputSearch />
          <div>
            <img src={Heart} alt="heart" />
          </div>
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-[1px] border-primary-500 px-2.5 pb-3 pt-2.5">
              <img src={Basket} alt="basket" />
            </div>
          </div>
          <div className="flex gap-4">
            <div>Войти</div>
            <div>
              <img src={Exite} alt="exite" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
