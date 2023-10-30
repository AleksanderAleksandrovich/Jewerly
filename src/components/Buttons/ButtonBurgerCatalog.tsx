import Button from './Button'

type Props = {
  page: string
  imgLeft: string
  imgRight: string
  onClick: () => void
  isCatalogOpen: boolean
}

const ButtonBurgerCatalog = ({
  page,
  imgLeft,
  onClick,
  imgRight,
  isCatalogOpen,
}: Props) => {
  const IconLeft = (
    <div className="h-[1.6rem] w-[1.6rem]">
      <img
        className="min-h-[1.6rem] min-w-[1.6rem]"
        src={imgLeft}
        alt={`img-${imgLeft}`}
      />
    </div>
  )
  const IconRight = (
    <div className="w-4">
      <img
        className={`${
          isCatalogOpen && 'rotate-180 transform'
        } min-w-4 transition duration-500`}
        src={imgRight}
        alt={`imgR-${imgRight}`}
      />
    </div>
  )
  return (
    <Button
      buttonProps={{
        onClick: () => {
          onClick()
        },
        className: 'flex items-center justify-start gap-5 ',
      }}
      iconLeft={IconLeft}
      iconRight={IconRight}
    >
      <span className="mr-20 whitespace-nowrap text-[1.25rem] tracking-tight  sm:mr-28 sm:text-[1.5rem]">
        {page}
      </span>
    </Button>
  )
}

export default ButtonBurgerCatalog
