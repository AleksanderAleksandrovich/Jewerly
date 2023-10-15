import Button from '../Buttons/Button'
import Plus from '@/assets/icons/Плюс на карточка товара.svg'
import Mines from '@/assets/icons/Минус на карточке товара.svg'
import { formatCurrency } from '@/utils/formatPrice'
import Heart from '@/assets/icons/heartForCard.svg'

type Props = {
  id: number
  type: string
  name: string
  price: number
  imgUrl: string
  color: string
}

const ShopingCard = ({ id, type, color, imgUrl, name, price }: Props) => {
  return (
    <div
      className="relative flex max-w-[22.75rem] flex-col bg-secondary-400"
    >
      <Button
        buttonProps={{
          className:
            'absolute top-5 left-[calc(50%-0.65rem)] min-h-[1.3rem] min-w-[1.3rem]',
        }}
      >
        <img src={Heart} alt="heart" />
      </Button>
      <img className="w-full object-cover" src={imgUrl} alt={`${imgUrl}`} />
      <div className="p-[1.43rem]">
        <h4 className="mb-[0.5rem] text-[1.25rem] text-green-850">
          {type} <span>"{name}"</span>
        </h4>
        <div
          style={{ backgroundColor: color }}
          className={`mb-[0.5rem] h-4 w-4 rounded-full`}
        />
        <span className="font-geoMed text-green-850">
          {formatCurrency(price)}
        </span>
        <div className="mt-[2rem] flex justify-between">
          <div className="flex h-[2.125rem] items-center justify-between gap-3 border-[1px] border-gray-300 px-4 py-[2px]">
            <Button
              buttonProps={{
                className:
                  'h-[2rem] w-[0.8rem] flex justify-center items-center',
              }}
            >
              <img className="max-w-[0.5rem]" src={Mines} alt="" />
            </Button>
            <div className="text-[1rem] text-green-850">0</div>
            <Button
              buttonProps={{
                className:
                  'h-[2rem] w-[0.8rem] flex justify-center items-center',
              }}
            >
              <img className="max-h-[0.5rem]" src={Plus} alt="" />
            </Button>
          </div>
          <Button
            buttonProps={{
              className:
                'bg-green-850 px-[1.5rem] py-[0.5rem] text-[1.125rem] text-white flex items-center',
            }}
          >
            в корзину
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ShopingCard
