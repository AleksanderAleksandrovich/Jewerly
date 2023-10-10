import Brilliant from '@/assets/icons/БрилиантNavbar.svg'
import ButtonCatalog from './ButtonCatalog'
import ButtonLink from './ButtonLink'
import InputSearch from './InputSearch'
import Heart from '@/assets/icons/Избранное.svg'
import Basket from '@/assets/icons/Корзина.svg'
import Exite from '@/assets/icons/Выход.svg'
import { SelectedPage } from '@/types/home'

type Prop = {
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Prop) => {
  return (
    <nav className="sticky  border-primary-500 bg-green-850 bg-noise z-30 flex top-0 h-[120px] items-center gap-16 px-14 pb-7 pt-16">
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
      <div className="flex w-1/4 items-center justify-end gap-5 ">
        <InputSearch />
        <div>
          <img src={Heart} alt="heart" />
        </div>
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-primary-500 px-2.5 pb-3 pt-2.5">
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
    </nav>
  )
}

export default Navbar
