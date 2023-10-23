import useMediaQuery from '@/hooks/useMediaQuery'
import {motion} from 'framer-motion'

type Props = {
  number: string
  img: string
  description: string
}
const childVariant = {
  hidden: { opacity: 0, x:50 },
  visible: { opacity: 1, x:0 },
}
const CardAdviceMedium = ({ description, img, number }: Props) => {
  return (
    <>
      <div className="mx-auto sm:ml-[2rem] sm:mr-auto">
        <img
          className="max-h-[24rem] sm:h-[34rem] sm:max-h-[34rem]"
          src={img}
          alt={`${img}`}
        />
      </div>
      <span className="text-start font-bergamasco text-[8rem] sm:-mt-[5rem] sm:ml-[27rem] sm:text-[10rem]">
        {number}
      </span>
      <span className="-mt-14 mb-8 mr-20 text-start text-[2rem] tracking-[-1.6px] sm:ml-auto sm:mr-0 sm:w-[43%] sm:text-[2.5rem]">
        {description}
      </span>
    </>
  )
}
const CardAdviceFull = ({ description, img, number }: Props) => {
  return (
    <motion.div variants={childVariant} transition={{duration:0.9}} className="flex flex-col">
      <img className="mx-auto mb-[2rem] h-[27.5rem]" src={img} alt={`${img}`} />
      <div className="flex items-center justify-between">
        <div className="w-[30%] font-bergamasco text-[8rem]">
          <span className='xl:text-[5rem] 2xl:text-[8rem]'>{number}</span>
        </div>
        <div className="w-[65%] text-[1.8rem] leading-[2.5rem] ml-[3rem]">
          <span className="tracking-[-5%] ">{description}</span>
        </div>
      </div>
    </motion.div>
  )
}

const CardAdvice = ({ description, img, number }: Props) => {
  const isAboveFullScreen = useMediaQuery('(min-width: 1300px)')
  if (isAboveFullScreen)
    return (
      <CardAdviceFull description={description} img={img} number={number} />
    )
  return (
    <CardAdviceMedium description={description} img={img} number={number} />
  )
}

export default CardAdvice
