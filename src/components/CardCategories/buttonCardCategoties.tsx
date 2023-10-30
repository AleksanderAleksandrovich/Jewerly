import Ovals from '@/assets/bg/Овалы.png'
import Button from '@/components/Buttons/Button'

const ButtonCardCategoties = () => {
  return (
    <Button buttonProps={{ className: 'relative' }}>
      <img src={Ovals} alt="ovals" />
      <div className="absolute left-[17%] top-[35%] text-[1.25rem] text-white sm:left-[23%] sm:text-[1rem] xl:left-[17%] xl:text-[1.25rem]">
        перейти в каталог
      </div>
    </Button>
  )
}

export default ButtonCardCategoties
