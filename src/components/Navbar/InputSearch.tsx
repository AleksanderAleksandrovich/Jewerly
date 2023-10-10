import useMediaQuery from '@/hooks/useMediaQuery'
import Search from '../../assets/icons/Сковородка.svg'
import { useState } from 'react'

// type Props = {}

const InputSearch = () => {
  const isAboveSmallScreen = useMediaQuery('(min-width: 1060px)')
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false)
  return (
    <>
      {isAboveSmallScreen ? (
        <div className="flex h-9 items-center justify-between gap-5 rounded-full border-[1px] border-primary-500 bg-transparent px-4 ">
          <input
            className="h-5 w-12 bg-transparent font-geoItal text-sm  tracking-tight text-primary-500 focus:outline-none"
            placeholder="Поиск"
          />
          <button className="min-h-[1.1rem] min-w-[1.1rem]">
            <img src={Search} alt="search" />
          </button>
        </div>
      ) : (
        <div className="relative flex items-center">
          <button onClick={() => setIsOpenSearch(!isOpenSearch)}>
            <img
              className="min-h-[1.4rem] min-w-[1.4rem]"
              src={Search}
              alt="search"
            />
          </button>
          {isOpenSearch && (
            <div className="absolute -bottom-[6.4rem] -left-52 rounded-full bg-secondary-400 px-5 py-6 ">
              <input
                placeholder="Поиск"
                className="w-[18.4rem] font-geoItal tracking-tight text-primary-500 placeholder:text-primary-500 focus:outline-none"
                type="text"
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default InputSearch
