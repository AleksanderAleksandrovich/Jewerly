import { SelectedPage } from '@/types/home'
import ButtonPage from '../Buttons/ButtonPage'
import BrlliantWithLines from '../BrilliantWithLines'
import X from '@/assets/icons/Х.svg'
import Facebook from '@/assets/icons/Фейсбук.svg'
import Inst from '@/assets/icons/Инстаграм.svg'
import Brilliant from '@/assets/icons/БрилиантNavbar.svg'
import useMediaQuery from '@/hooks/useMediaQuery'
type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
}

const FooterMobile = () => (
  <>
    <BrlliantWithLines />
    <div className="mb-[3rem] flex flex-col">
      <h3 className="mt-[2rem] text-start text-[2.25rem]">Каталог</h3>
      <ButtonPage page="Сережки" />
      <ButtonPage page="Кольца" />
      <ButtonPage page="Браслеты" />
      <ButtonPage page="Кулоны и медальоны" />
      <ButtonPage page="Мужские товары" />
      <ButtonPage page="Товары для свадьбы" />
    </div>
    <div className="mb-[3rem] flex flex-col">
      <h3 className="mt-[2rem] text-start text-[2.25rem]">Информация</h3>
      <ButtonPage page="Контакты" />
      <ButtonPage page="Оплата и доставка" />
    </div>
    <div className="mb-[3rem] flex flex-col">
      <h3 className="text-start text-[2.25rem]">ИП Хмара Татьяна Сергеевна</h3>
      <h3 className="text-start text-[2.25rem]">ИНН 3689426798</h3>
      <h3 className="text-start text-[2.25rem]">+7 (971) 607-23-94</h3>
    </div>
    <div className="mb-[2rem] flex">
      <img className="mr-6 h-[2.5rem]" src={X} alt="" />
      <img className="mr-6 h-[2.5rem]" src={Facebook} alt="" />
      <img className="mr-6 h-[2.5rem]" src={Inst} alt="" />
    </div>
    <div className="mb-8 h-[1px] w-full bg-primary-500" />
    <div className="mb-8 flex flex-col">
      <img className="mx-auto h-[3.6rem]" src={Brilliant} alt="" />
      <h3 className="font-perpetua text-center text-[4rem] text-white">
        CharmVogue
      </h3>
    </div>
  </>
)

const FooterMediumScreen = () => (
  <>
    <BrlliantWithLines />
    <div className="mb-[3rem] mt-[2rem] flex justify-between ">
      <div className="flex flex-col">
        <h3 className="text-start text-[3rem]">Каталог</h3>
        <ButtonPage page="Сережки" />
        <ButtonPage page="Кольца" />
        <ButtonPage page="Браслеты" />
        <ButtonPage page="Кулоны и медальоны" />
        <ButtonPage page="Мужские товары" />
        <ButtonPage page="Товары для свадьбы" />
      </div>
      <div className="mr-[5rem] flex flex-col">
        <h3 className="text-start text-[3rem]">Информация</h3>
        <ButtonPage page="Контакты" />
        <ButtonPage page="Оплата и доставка" />
      </div>
    </div>
    <div className="flex ">
      <div className="mb-[3rem] mr-[12rem] flex flex-col">
        <h3 className="text-start text-[2.25rem]">
          ИП Хмара Татьяна Сергеевна
        </h3>
        <h3 className="text-start text-[2.25rem]">ИНН 3689426798</h3>
        <h3 className="text-start text-[2.25rem]">+7 (971) 607-23-94</h3>
      </div>
      <div className="mb-[2rem] flex">
        <img className="mr-6 h-[2.5rem]" src={X} alt="" />
        <img className="mr-6 h-[2.5rem]" src={Facebook} alt="" />
        <img className="mr-6 h-[2.5rem]" src={Inst} alt="" />
      </div>
    </div>
    <div className="mb-[3.25rem] h-[1px] w-full bg-primary-500" />
    <div className="mb-[3.25rem] flex flex-col">
      <img className="mx-auto h-[4.8rem]" src={Brilliant} alt="" />
      <h3 className="font-perpetua text-center text-[6rem] text-white">
        CharmVogue
      </h3>
    </div>
  </>
)
const FooterFullScreen = () => (
  <>
    <BrlliantWithLines />
    <div className="mb-[5.5rem] mt-[2rem] flex justify-between ">
      <div className="flex flex-col">
        <h3 className="text-start text-[1.5rem] mb-4">
          ИП Хмара Татьяна Сергеевна
        </h3>
        <h3 className="text-start text-[1.5rem] mb-4">ИНН 3689426798</h3>
        <h3 className="text-start text-[1.5rem]">+7 (971) 607-23-94</h3>
      </div>
      <div className="flex flex-col">
        <h3 className="text-start text-[2rem]">Каталог</h3>
        <ButtonPage page="Сережки" />
        <ButtonPage page="Кольца" />
        <ButtonPage page="Браслеты" />
        <ButtonPage page="Кулоны и медальоны" />
        <ButtonPage page="Мужские товары" />
        <ButtonPage page="Товары для свадьбы" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-start text-[2rem]">Информация</h3>
        <ButtonPage page="Контакты" />
        <ButtonPage page="Оплата и доставка" />
      </div>

      <div className="flex">
        <img className="mr-6 h-[1.75rem]" src={X} alt="" />
        <img className="mr-6 h-[1.75rem]" src={Facebook} alt="" />
        <img className="h-[1.75rem]" src={Inst} alt="" />
      </div>
    </div>
    <div className="mb-[3.25rem] h-[1px] w-full bg-primary-500" />
    <div className="mb-[3.25rem] flex flex-col">
      <img className="mx-auto h-[4.8rem]" src={Brilliant} alt="" />
      <h3 className="font-perpetua text-center text-[6rem] text-white">
        CharmVogue
      </h3>
    </div>
  </>
)
const FooterContent = () => {
  const isAboveFullScreen = useMediaQuery('(min-width: 1300px)')
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')
  if (isAboveFullScreen) return <FooterFullScreen />
  if (isAboveMediumScreen) return <FooterMediumScreen />
  return <FooterMobile />
}

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="mx-24 sm:mx-14">
      <FooterContent />
    </footer>
  )
}

export default Footer