import useMediaQuery from '@/hooks/useMediaQuery'
import Search from '../../assets/icons/Сковородка.svg'
import { useState } from 'react'
import ArrowSearch from '@/assets/icons/ArrowSearch.svg'
import Button from '../Buttons/Button'

// type Props = {}

const InputSearch = () => {
  const isAboveSmallScreen = useMediaQuery('(min-width: 1060px)')
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false)
  const SearchOpenForSmallScreen = (
    <div className="absolute -bottom-[6.3rem] -left-52 flex w-[20rem] items-center justify-between rounded-full bg-secondary-400 px-6  py-5">
      <input
        placeholder="Поиск"
        className="w-[14rem] bg-secondary-400 font-geoItal text-[1.25rem] tracking-tight text-primary-500 placeholder:text-primary-500 focus:outline-none"
        type="text"
      />
      <Button>
        <img src={ArrowSearch} alt="arowSearch" />
      </Button>
    </div>
  )
  const SearchFullScreen = (
    <div className="flex h-9 items-center justify-between gap-3 rounded-full border-[1px] border-primary-500 bg-transparent px-4 py-2 ">
      <input
        className="h-5 w-20 bg-transparent font-geoItal text-base tracking-tight text-primary-500 focus:outline-none"
        placeholder="Поиск"
      />
      <button className="min-h-[1.1rem] min-w-[1.1rem]">
        <img src={Search} alt="search" />
      </button>
    </div>
  )
  const SearchSmallScreen = (
    <div className="relative flex items-center">
      <button onClick={() => setIsOpenSearch(!isOpenSearch)}>
        <img
          className="min-h-[1.4rem] min-w-[1.4rem]"
          src={Search}
          alt="search"
        />
      </button>
      {isOpenSearch && SearchOpenForSmallScreen}
    </div>
  )
  return <>{isAboveSmallScreen ? SearchFullScreen : SearchSmallScreen}</>
}

export default InputSearch
