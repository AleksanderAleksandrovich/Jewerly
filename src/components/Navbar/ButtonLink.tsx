import { SelectedPage } from '@/types/home'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Prop = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
  isAboveMediumScreen: boolean
}

const ButtonLink = ({
  page,
  selectedPage,
  setSelectedPage,
  isAboveMediumScreen,
}: Prop) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
  const styleCurrentPageMed = `${
    selectedPage === lowerCasePage && isAboveMediumScreen
      ? 'before:absolute before:bottom-0 before:left-[30%] before:h-[1px] before:w-7 before:bg-white text-white'
      : ''
  }`
  const styleCurrentPageMin = `${
    selectedPage === lowerCasePage && !isAboveMediumScreen
      ? 'before:absolute before:bottom-[calc(50%-4px)] before:left-36 before:h-[8px] before:w-[8px] before:bg-primary-500 before:rounded-full'
      : ''
  }`
  return (
    <AnchorLink
      className={`${styleCurrentPageMin} ${styleCurrentPageMed}
        ${!isAboveMediumScreen && 'hover:text-primary-500'}
       relative whitespace-nowrap text-base tracking-tight transition duration-500 hover:text-secondary-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default ButtonLink
