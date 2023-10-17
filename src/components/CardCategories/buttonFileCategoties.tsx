import React from 'react'
import Ovals from '@/assets/bg/Овалы.png'

const ButtonFileCategoties = () => {
  return (
    <div className='relative'>
      <img src={Ovals} alt="ovals" />
      <div className='absolute text-[1.25rem] sm:text-[1rem] xl:text-[1.25rem] text-white top-[35%] left-[17%] sm:left-[23%] xl:left-[17%]'>перейти в каталог</div>
    </div>
  )
}

export default ButtonFileCategoties
