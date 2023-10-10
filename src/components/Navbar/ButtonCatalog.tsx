import useMediaQuery from '@/hooks/useMediaQuery'
import Burger from '../../assets/icons/Бургер.svg'

// type Props = {};

const ButtonCatalog = () => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1300px)')
  return (
    <button className="h-9 rounded-full border-[1px] border-primary-500 bg-transparent px-4">
      {isAboveMediumScreen ? (
        <div className="flex items-center justify-between gap-4">
          <img src={Burger} alt="burger" />
          <div className="text-base tracking-tight">Каталог</div>
        </div>
      ) : (
        <img className='min-w-[1.4rem]' src={Burger} alt="burger" />
      )}
    </button>
  )
}
export default ButtonCatalog
