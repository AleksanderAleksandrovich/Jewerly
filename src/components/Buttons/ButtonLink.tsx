import { SelectedPage } from '@/types/home'
import Button from './Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Prop = {
  page: string
  selectedPage: SelectedPage
}

export const ButtonLinkWithLine = ({ page, selectedPage }: Prop) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
  const styleCurrentPage = `${
    lowerCasePage === selectedPage
      ? 'before:absolute before:bottom-0 before:left-[20%] before:h-[1px] before:w-[60%] before:bg-white text-white'
      : ''
  }`
  return (
    <Button buttonProps={{ className: 'flex justify-center items-center' }}>
      <AnchorLink
        offset={() => -1}
        className={`${styleCurrentPage} relative whitespace-nowrap text-[1.25rem] tracking-tighter transition duration-500 hover:text-secondary-500`}
        href={`#${lowerCasePage}`}
      >
        {page}
      </AnchorLink>
    </Button>
  )
}

export const ButtonLinkWithDot = ({ page, selectedPage }: Prop) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
  const styleCurrentPage = `${
    lowerCasePage === selectedPage
      ? 'before:absolute before:bottom-[calc(50%-7px)] before:left-52 before:h-[8px] before:w-[8px] before:bg-primary-500 before:rounded-full'
      : ''
  }`
  return (
    <Button buttonProps={{ className: 'flex justify-start items-center' }}>
      <AnchorLink
        offset={() => -1}
        className={`${styleCurrentPage} relative whitespace-nowrap text-[1.25rem] tracking-tighter  sm:text-[1.5rem] `}
        href={`#${lowerCasePage}`}
      >
        {page}
      </AnchorLink>
    </Button>
  )
}
