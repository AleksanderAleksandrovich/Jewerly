import { useState } from 'react'
import Button from './Button'

type Props = {
  page: string
  img: string
  imgRight: string
  onClick: () => void
}

const ButtonBurgerCatalog = ({ page, img, onClick, imgRight }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const Icon = (
    <div className="h-[1.6rem] w-[1.6rem]">
      <img
        className="min-h-[1.6rem] min-w-[1.6rem]"
        src={img}
        alt={`img-${img}`}
      />
    </div>
  )
  const IconRight = (
    <div className=" w-4">
      <img className={`${isOpen&& 'transform rotate-180'} transition duration-500 min-w-4`} src={imgRight} alt={`imgR-${imgRight}`} />
    </div>
  )
  return (
    <Button
      buttonProps={{
        onClick: ()=>{onClick()
          setIsOpen(!isOpen)
        },
        className: 'flex items-center justify-start gap-5',
      }}
      iconLeft={Icon}
      iconRight={IconRight}
    >
      <span className=" whitespace-nowrap text-[1.5rem]  tracking-tight mr-28">
        {page}
      </span>
    </Button>
  )
}

export default ButtonBurgerCatalog
