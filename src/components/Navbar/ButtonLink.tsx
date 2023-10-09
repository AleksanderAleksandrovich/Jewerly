import { SelectedPage } from '@/types/home'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Prop = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
}

const ButtonLink = ({ page, selectedPage, setSelectedPage }: Prop) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? 'before:absolute before:bottom-1 before:left-[30%] before:h-[1px] before:w-[27px] before:bg-white'
          : ''
      } relative text-base tracking-tight`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default ButtonLink
