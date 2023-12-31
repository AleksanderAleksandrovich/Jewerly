import Button from '../Buttons/Button'
import Plus from '@/assets/icons/Плюс на карточка товара.svg'
import Mines from '@/assets/icons/Минус на карточке товара.svg'
import { formatCurrency } from '@/utils/formatPrice'
import Heart from '@/assets/icons/heartForCard.svg'
import HeartFill from '@/assets/icons/Избранное fill.svg'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useState } from 'react'
import { useBasketStore } from '@/store/buying'
import { useFavoriteStore } from '@/store/favorites'

type Props = {
  id: number
  type: string
  name: string
  price: number
  imgUrl: string
  color: string
}

type PropsForContentCard = Props & {
  counter: number
  setCounter: (val: number) => void
  addToBascket: (id: number, count: number) => void
  isFavorites: boolean
  changeFavorite: (id: number, isFavorite: boolean) => void
}

const CardForSmallScreen = ({
  changeFavorite,
  isFavorites,
  id,
  type,
  color,
  imgUrl,
  name,
  price,
  counter,
  setCounter,
  addToBascket,
}: PropsForContentCard) => {
  return (
    <div className="mb-4 flex h-[35.3rem] max-w-[26.6rem] flex-col bg-secondary-400">
      {/* Картинка и сердечко */}
      <div className="relative h-[22rem]">
        <img
          className="max-h-[22rem] w-full object-cover"
          src={imgUrl}
          alt={`${imgUrl}`}
        />
        <Button
          buttonProps={{
            onClick: () => {
              changeFavorite(id, !isFavorites)
            },
            className:
              'absolute top-5 left-[calc(50%-0.65rem)] min-h-[1.3rem] min-w-[1.3rem]',
          }}
        >
          {isFavorites ? (
            <img className="h-6" src={HeartFill} alt="heartFill" />
          ) : (
            <img className="h-6" src={Heart} alt="heart" />
          )}
        </Button>
      </div>

      {/* Описание */}
      <div className="p-[1.6rem] pt-0">
        <h4 className="mb-[0.5rem] text-[1.5rem] text-green-850">
          {type} <span>"{name}"</span>
        </h4>

        {/* Кружочек цвет металла */}
        <div
          style={{ backgroundColor: color }}
          className={`mb-[0.5rem] h-4 w-4 rounded-full`}
        />

        {/* Цена */}
        <span className="font-geoMed text-[1.5rem] text-green-850">
          {formatCurrency(price)}
        </span>

        {/* Блок кнопок */}
        <div className="mt-[2.6rem] flex justify-between">
          <div className="flex h-[2.5rem] items-center justify-between gap-3 border-[1px] border-gray-300 px-2 py-[2px]">
            <Button
              buttonProps={{
                disabled: counter === 1,
                onClick: () => setCounter(counter - 1),
                className:
                  'h-[1.5rem] w-[1.5rem] flex justify-center items-center',
              }}
            >
              <img className="min-w-[0.8rem]" src={Mines} alt="mines" />
            </Button>
            <div className="w-[1rem] text-center text-[1.2rem] text-green-850">
              {counter}
            </div>
            <Button
              buttonProps={{
                disabled: counter === 99,
                onClick: () => setCounter(counter + 1),
                className:
                  'h-[1.5rem] w-[1.5rem] flex justify-center items-center',
              }}
            >
              <img className="min-h-[0.8rem]" src={Plus} alt="plus" />
            </Button>
          </div>

          <Button
            buttonProps={{
              onClick: () => addToBascket(id, counter),
              className:
                'bg-green-850 px-[1.5rem] pb-[0.6rem] pt-[0.4rem] text-[1.2rem] text-white flex items-center flex',
            }}
          >
            в корзину
          </Button>
        </div>
      </div>
    </div>
  )
}

const CardForMediumScreen = ({
  changeFavorite,
  isFavorites,
  id,
  type,
  color,
  imgUrl,
  name,
  price,
  counter,
  setCounter,
  addToBascket,
}: PropsForContentCard) => {
  return (
    <div className="flex h-[38rem] max-w-[30rem] flex-col bg-secondary-400 md:h-[45rem] md:max-w-[34rem]">
      {/* Картинка и сердечко */}
      <div className="relative h-[29rem]">
        <img
          className="max-h-[29rem] w-full object-cover"
          src={imgUrl}
          alt={`${imgUrl}`}
        />
        <Button
          buttonProps={{
            onClick: () => {
              changeFavorite(id, !isFavorites)
            },
            className:
              'absolute top-5 left-[calc(50%-0.65rem)] min-h-[1.3rem] min-w-[1.3rem]',
          }}
        >
          {isFavorites ? (
            <img className="h-8" src={HeartFill} alt="heartFill" />
          ) : (
            <img className="h-8" src={Heart} alt="heart" />
          )}
        </Button>
      </div>

      {/* Описание */}
      <div className="p-[1.43rem] pt-0">
        <h4 className="mb-[0.5rem] text-[1.7rem] text-green-850 md:text-[2rem]">
          {type} <span>"{name}"</span>
        </h4>

        {/* Кружочек цвет металла */}
        <div
          style={{ backgroundColor: color }}
          className={`mb-[0.5rem] h-5 w-5 rounded-full`}
        />

        {/* Цена */}
        <span className="font-geoMed text-[1.5rem] text-green-850">
          {formatCurrency(price)}
        </span>

        {/* Блок кнопок */}
        <div className="mt-[3.5rem] flex">
          <div className="flex h-[2.875rem] items-center justify-between gap-3 border-[1px] border-gray-300 px-2 py-[2px]">
            <Button
              buttonProps={{
                disabled: counter === 1,
                onClick: () => setCounter(counter - 1),
                className: 'h-[2rem] w-[2rem] flex justify-center items-center',
              }}
            >
              <img className="min-w-[0.8rem]" src={Mines} alt="mines" />
            </Button>
            <div className="w-[1rem] text-center text-[1.5rem] text-green-850">
              {counter}
            </div>
            <Button
              buttonProps={{
                disabled: counter === 99,
                onClick: () => setCounter(counter + 1),
                className: 'h-[2rem] w-[2rem] flex justify-center items-center',
              }}
            >
              <img className="min-h-[0.8rem]" src={Plus} alt="plus" />
            </Button>
          </div>

          <Button
            buttonProps={{
              onClick: () => addToBascket(id, counter),
              className:
                'bg-green-850 px-[1.5rem] pb-[0.6rem] pt-[0.4rem] mr-0 ml-auto text-[1rem] md:text-[1.5rem] text-white whitespace-nowrap flex items-center flex',
            }}
          >
            в корзину
          </Button>
        </div>
      </div>
    </div>
  )
}

const CardForFullScreen = ({
  changeFavorite,
  isFavorites,
  addToBascket,
  id,
  type,
  color,
  imgUrl,
  name,
  price,
  counter,
  setCounter,
}: PropsForContentCard) => {
  return (
    <div className="flex max-w-[90%] flex-col bg-secondary-400">
      {/* Картинка и сердечко */}
      <div className="relative min-h-[22.5rem] ">
        <img className="w-full object-cover" src={imgUrl} alt={`${imgUrl}`} />
        <Button
          buttonProps={{
            onClick: () => {
              changeFavorite(id, !isFavorites)
            },
            className:
              'absolute top-5 left-[calc(50%-0.65rem)] min-h-[1.3rem] min-w-[1.3rem]',
          }}
        >
          {isFavorites ? (
            <img src={HeartFill} alt="heartFill" />
          ) : (
            <img src={Heart} alt="heart" />
          )}
        </Button>
      </div>

      {/* Описание */}
      <div className="p-[1.43rem] pt-0">
        <h4 className="mb-[0.5rem] whitespace-nowrap text-[1.25rem] text-green-850">
          {type} <span>"{name}"</span>
        </h4>

        {/* Кружочек чвет металла */}
        <div
          style={{ backgroundColor: color }}
          className={`mb-[0.5rem] h-4 w-4 rounded-full`}
        />

        {/* Цена */}
        <span className="font-geoMed text-green-850">
          {formatCurrency(price)}
        </span>

        {/* Блок кнопок */}
        <div className="mt-[2rem] flex">
          <div className="flex items-center justify-between gap-3 border-[1px] border-gray-300 px-4 py-[2px] xl:h-[2rem] 2xl:h-[2.125rem]">
            <Button
              buttonProps={{
                disabled: counter === 1,
                onClick: () => setCounter(counter - 1),
                className:
                  'h-[2rem] w-[0.8rem] flex justify-center items-center',
              }}
            >
              <img className="max-w-[0.5rem]" src={Mines} alt="" />
            </Button>
            <div className="w-[1rem] text-center text-[1rem] text-green-850">
              {counter}
            </div>
            <Button
              buttonProps={{
                disabled: counter === 99,
                onClick: () => setCounter(counter + 1),
                className:
                  'h-[2rem] w-[0.8rem] flex justify-center items-center',
              }}
            >
              <img className="max-h-[0.5rem]" src={Plus} alt="" />
            </Button>
          </div>

          <Button
            buttonProps={{
              onClick: () => addToBascket(id, counter),
              className:
                'bg-green-850 px-[1.5rem] py-[0.5rem] text-[1.125rem] mr-0 ml-auto text-white flex items-center whitespace-nowrap',
            }}
          >
            в корзину
          </Button>
        </div>
      </div>
    </div>
  )
}

const ShopingCard = ({ id, type, color, imgUrl, name, price }: Props) => {
  const isAboveFullScreen = useMediaQuery('(min-width: 1300px)')
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')

  const [counter, setCounter] = useState<number>(1)

  const addToBascket = useBasketStore((state) => state.incrItemCount)
  const changeFavorite = useFavoriteStore((state) => state.changeFavorites)
  const isFavoriteItems = useFavoriteStore(
    (state) => state.jewerlyItemFavorites
  )

  const isFavorite =
    isFavoriteItems.find((item) => item.id === id)?.isfavorites || false
  if (isAboveFullScreen)
    return (
      <CardForFullScreen
        changeFavorite={changeFavorite}
        isFavorites={isFavorite}
        addToBascket={addToBascket}
        counter={counter}
        setCounter={setCounter}
        id={id}
        type={type}
        color={color}
        imgUrl={imgUrl}
        name={name}
        price={price}
      />
    )
  if (isAboveMediumScreen)
    return (
      <CardForMediumScreen
        changeFavorite={changeFavorite}
        isFavorites={isFavorite}
        addToBascket={addToBascket}
        counter={counter}
        setCounter={setCounter}
        id={id}
        type={type}
        color={color}
        imgUrl={imgUrl}
        name={name}
        price={price}
      />
    )
  return (
    <CardForSmallScreen
      changeFavorite={changeFavorite}
      isFavorites={isFavorite}
      addToBascket={addToBascket}
      counter={counter}
      setCounter={setCounter}
      id={id}
      type={type}
      color={color}
      imgUrl={imgUrl}
      name={name}
      price={price}
    />
  )
}

export default ShopingCard
