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
      <span className="whitespace-nowrap text-[2rem] tracking-[-2px] text-primary-500 sm:text-[2.5rem] xl:text-[1.5rem]">
        {page}
      </span>
    </Button>
  )
}

export default ButtonPage
