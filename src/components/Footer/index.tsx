import { ButtonPage } from '../Buttons/ButtonPage'
import { BrlliantWithLines } from '../BrilliantWithLines'
import X from '@/assets/icons/Х.svg'
import Facebook from '@/assets/icons/Фейсбук.svg'
import Inst from '@/assets/icons/Инстаграм.svg'
import Brilliant from '@/assets/icons/БрилиантNavbar.svg'
import useMediaQuery from '@/hooks/useMediaQuery'

const FooterMobile = () => (
  <>
    <BrlliantWithLines />

    <div className="mb-[3rem] flex flex-col">
      <h3 className="mb-[0.5rem] mt-[2rem] text-start text-[2.25rem] text-primary-500">
        Каталог
      </h3>
      <ButtonPage page="Сережки" link="/catalog/earrings" />
      <ButtonPage page="Кольца" link="/catalog/rings" />
      <ButtonPage page="Браслеты" link="/catalog/bracelets" />
      <ButtonPage page="Кулоны и медальоны" link="/catalog/pendants" />
      <ButtonPage page="Мужские товары" link="/catalog/forHim" />
      <ButtonPage page="Товары для свадьбы" link="/catalog/forWedding" />
    </div>

    <div className="mb-[3rem] flex flex-col">
      <h3 className="mb-[0.5rem] mt-[2rem] text-start  text-[2.25rem] text-primary-500">
        Информация
      </h3>
      {/* заглушка  */}
      <ButtonPage page="Контакты" link="/catalog/contacts" />
      <ButtonPage page="Оплата и доставка" link="/catalog/delivery" />
    </div>

    <div className="mb-[3rem] flex flex-col">
      <h3 className="text-start text-[2.25rem] text-primary-500">
        ИП Хмара Татьяна Сергеевна
      </h3>
      <h3 className="text-start text-[2.25rem]  text-primary-500">
        ИНН 3689426798
      </h3>
      <h3 className="text-start text-[2.25rem]  text-primary-500">
        +7 (971) 607-23-94
      </h3>
    </div>

    <div className="mb-[2rem] flex">
      <img className="mr-6 h-[2.5rem]" src={X} alt="" />
      <img className="mr-6 h-[2.5rem]" src={Facebook} alt="" />
      <img className="mr-6 h-[2.5rem]" src={Inst} alt="" />
    </div>

    <div className="mb-8 h-[1px] w-full bg-primary-500" />

    <div className="flex flex-col pb-8">
      <img className="mx-auto h-[3.6rem]" src={Brilliant} alt="" />
      <h3 className="text-center font-perpetua text-[4rem] text-white">
        CharmVogue
      </h3>
    </div>
  </>
)

const FooterMediumScreen = () => (
  <>
    <BrlliantWithLines />
    <div className="mb-[3rem] mt-[2rem] flex flex-wrap justify-between">
      <div className="mb-[2rem] flex flex-col">
        <h3 className="mb-[0.5rem] text-start text-[3rem] text-primary-500">
          Каталог
        </h3>

        <ButtonPage page="Сережки" link="/catalog/earrings" />
        <ButtonPage page="Кольца" link="/catalog/rings" />
        <ButtonPage page="Браслеты" link="/catalog/bracelets" />
        <ButtonPage page="Кулоны и медальоны" link="/catalog/pendants" />
        <ButtonPage page="Мужские товары" link="/catalog/forHim" />
        <ButtonPage page="Товары для свадьбы" link="/catalog/forWedding" />
      </div>
      <div className="mr-[5rem] flex flex-col">
        <h3 className="mb-[0.5rem] text-start text-[3rem] text-primary-500">
          Информация
        </h3>
        {/* заглушка  */}
        <ButtonPage page="Контакты" link="/catalog/contacts" />
        <ButtonPage page="Оплата и доставка" link="/catalog/delivery" />
      </div>
    </div>

    <div className="flex ">
      <div className="mb-[3rem] mr-[8rem] flex flex-col">
        <h3 className="text-start text-[2.25rem] text-primary-500">
          ИП Хмара Татьяна Сергеевна
        </h3>
        <h3 className="text-start text-[2.25rem] text-primary-500">
          ИНН 3689426798
        </h3>
        <h3 className="text-start text-[2.25rem] text-primary-500">
          +7 (971) 607-23-94
        </h3>
      </div>
      <div className="mb-[2rem] flex">
        <img className="mr-6 h-[2.5rem]" src={X} alt="" />
        <img className="mr-6 h-[2.5rem]" src={Facebook} alt="" />
        <img className="mr-6 h-[2.5rem]" src={Inst} alt="" />
      </div>
    </div>

    <div className="mb-[3.25rem] h-[1px] w-full bg-primary-500" />

    <div className="flex flex-col pb-[3.25rem]">
      <img className="mx-auto h-[4.8rem]" src={Brilliant} alt="" />
      <h3 className="text-center font-perpetua text-white sm:text-[5rem] md:text-[6rem]">
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
        <h3 className="mb-4 text-start text-[1.5rem] text-primary-500">
          ИП Хмара Татьяна Сергеевна
        </h3>
        <h3 className="mb-4 text-start text-[1.5rem] text-primary-500">
          ИНН 3689426798
        </h3>
        <h3 className="text-start text-[1.5rem] text-primary-500">
          +7 (971) 607-23-94
        </h3>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-[0.5rem] text-start text-[2rem] text-primary-500">
          Каталог
        </h3>
        <ButtonPage page="Сережки" link="/catalog/earrings" />
        <ButtonPage page="Кольца" link="/catalog/rings" />
        <ButtonPage page="Браслеты" link="/catalog/bracelets" />
        <ButtonPage page="Кулоны и медальоны" link="/catalog/pendants" />
        <ButtonPage page="Мужские товары" link="/catalog/forHim" />
        <ButtonPage page="Товары для свадьбы" link="/catalog/forWedding" />
      </div>
      <div className="flex flex-col">
        <h3 className="mb-[0.5rem] text-start text-[2rem] text-primary-500">
          Информация
        </h3>
        {/* заглушка  */}
        <ButtonPage page="Контакты" link="/catalog/contacts" />
        <ButtonPage page="Оплата и доставка" link="/catalog/delivery" />
      </div>

      <div className="flex">
        <img className="mr-6 h-[1.75rem]" src={X} alt="" />
        <img className="mr-6 h-[1.75rem]" src={Facebook} alt="" />
        <img className="h-[1.75rem]" src={Inst} alt="" />
      </div>
    </div>

    <div className="mb-[3.25rem] h-[1px] w-full bg-primary-500" />

    <div className="flex flex-col pb-[3.25rem]">
      <img className="mx-auto h-[4.8rem]" src={Brilliant} alt="" />
      <h3 className="text-center font-perpetua text-[6rem] text-white">
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

const Footer = () => {
  return (
    <footer className="mx-24 sm:mx-14">
      <FooterContent />
    </footer>
  )
}

export default Footer
