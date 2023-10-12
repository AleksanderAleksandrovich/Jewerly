import { SelectedPage } from '@/types/home'
import Button from './Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Prop = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (val: SelectedPage) => void
}

export const ButtonLinkWithLine = ({
  page,
  selectedPage,
  setSelectedPage,
}: Prop) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
  const styleCurrentPage = `${
    lowerCasePage === selectedPage
      ? 'before:absolute before:bottom-0 before:left-[30%] before:h-[1px] before:w-7 before:bg-white text-white'
      : ''
  }`
  return (
    <Button buttonProps={{ className: 'flex justify-center items-center' }}>
      <AnchorLink
        className={`${styleCurrentPage} relative whitespace-nowrap text-[1.25rem] tracking-tighter transition duration-500 hover:text-secondary-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    </Button>
  )
}

export const ButtonLinkWithDot = ({
  page,
  selectedPage,
  setSelectedPage,
}: Prop) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
  const styleCurrentPage = `${
    lowerCasePage === selectedPage
      ? 'before:absolute before:bottom-[calc(50%-7px)] before:left-52 before:h-[8px] before:w-[8px] before:bg-primary-500 before:rounded-full'
      : ''
  }`
  return (
    <Button buttonProps={{ className: 'flex justify-start items-center' }}>
      <AnchorLink
        className={`${styleCurrentPage} relative whitespace-nowrap text-[1.5rem]  tracking-tighter `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    </Button>
  )
}
