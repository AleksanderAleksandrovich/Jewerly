import React from 'react'

type Props = {
  page: string
  img: string
}

const ButtonPage = ({ page, img }: Props) => {
  return (
    <div className="flex items-center justify-start gap-5">
      <div className="h-[1.6rem] w-[1.6rem]">
        <img
          className="min-h-[1.6rem] min-w-[1.6rem]"
          src={img}
          alt={`img-${img}`}
        />
      </div>
      <div className=" whitespace-nowrap text-[1.5rem]  tracking-tight transition duration-500 hover:text-primary-500 ">
        {page}
      </div>
    </div>
  )
}

export default ButtonPage
