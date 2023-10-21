import { NavLink } from 'react-router-dom'
import Button from './Button'

type Props = {
  page: string
  className?: string
}

const ButtonPage = ({ page, className }: Props) => {
  return (
    <Button
      buttonProps={{
        className: `${className} mb-[0.5rem] text-start`,
      }}
    >
      <span className="whitespace-nowrap text-[2rem] text-primary-500 sm:text-[2.5rem] xl:text-[1.5rem]">
        <NavLink to='/catalog'>{page}</NavLink>
      </span>
    </Button>
  )
}

export default ButtonPage
