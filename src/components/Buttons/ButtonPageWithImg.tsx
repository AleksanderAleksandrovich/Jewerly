import React from 'react'
import Button from './Button'

type Props = {
  page: string
  img: string
  className?: string
}

const ButtonPageWithImg = ({ page, img, className }: Props) => {
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
        className: `${className} flex items-center justify-start gap-5`,
      }}
      iconLeft={Icon}
    >
      <div className="whitespace-nowrap text-[1.25rem] sm:text-[1.5rem] tracking-tight transition duration-500 hover:text-primary-500">
        {page}
      </div>
    </Button>
  )
}

export default ButtonPageWithImg
