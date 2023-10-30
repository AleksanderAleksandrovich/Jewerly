import { SelectedPage } from '@/types/home'
import { ButtonLinkWithDot } from '../Buttons/ButtonLink'

type Props = {
  selectedPage: SelectedPage
}

const PartButtonLink = ({ selectedPage}: Props) => {
  return (
    <div className="flex flex-col gap-2 py-4 ">
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        page="Главная"
      />
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        page="Бриллиант"
      />
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        page="Новинки"
      />
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        page="Категории"
      />
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        page="Заказ в подарок"
      />
      <ButtonLinkWithDot
        selectedPage={selectedPage}
        page="Уход"
      />
    </div>
  )
}

export default PartButtonLink
