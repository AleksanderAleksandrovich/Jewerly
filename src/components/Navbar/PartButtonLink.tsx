import React from 'react'
import ButtonLink from './ButtonLink'
import { SelectedPage } from '@/types/home'

type Props = {
  isAboveMediumScreen: boolean
  setSelectedPage: (val: SelectedPage) => void
  selectedPage: SelectedPage
}

const PartButtonLink = ({
  selectedPage,
  setSelectedPage,
  isAboveMediumScreen,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 py-4 ">
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
  )
}

export default PartButtonLink
