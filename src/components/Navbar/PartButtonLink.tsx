import { SelectedPage } from '@/types/home'
import { ButtonLinkWithDot } from '../Buttons/ButtonLink'

type Props = {
  setSelectedPage: (val: SelectedPage) => void
  selectedPage: SelectedPage
}

const PartButtonLink = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className="flex flex-col gap-2 py-4 ">
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="Главная"
      />
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="Бриллиант"
      />
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="Новинки"
      />
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="Категории"
      />
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="Заказ в подарок"
      />
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        page="Уход"
      />
    </div>
  )
}

export default PartButtonLink
