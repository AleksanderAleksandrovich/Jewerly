import Button from './Button'

type Props = {
  page: string
  img: string
  onClick: () => void
}

const ButtonBurgerCatalog = ({ page, img, onClick }: Props) => {
  const Icon = (
    <div className="h-[1.6rem] w-[1.6rem]">
      <img
        className="min-h-[1.6rem] min-w-[1.6rem]"
        src={img}
        alt={`img-${img}`}
      />
    </div>
  )
  return (
    <Button
      buttonProps={{
        onClick: onClick,
        className: 'flex items-center justify-start gap-5 pb-4',
      }}
      iconLeft={Icon}
    >
      <span className=" whitespace-nowrap text-[1.5rem]  tracking-tight ">
        {page}
      </span>
    </Button>
  )
}

export default ButtonBurgerCatalog
