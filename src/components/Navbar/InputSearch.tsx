import useMediaQuery from '@/hooks/useMediaQuery'
import Search from '../../assets/icons/Сковородка.svg'
import { useState } from 'react'
import ArrowSearch from '@/assets/icons/ArrowSearch.svg'
import Button from '../Buttons/Button'

type Props = {
  isOpenSearch: boolean
  setIsOpenSearch: (val: boolean) => void
}

const SearchFullScreen = () => (
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
const SearchSmallScreen = ({ isOpenSearch, setIsOpenSearch }: Props) => (
  <div className="flex items-center sm:relative">
    <button onClick={() => setIsOpenSearch(!isOpenSearch)}>
      <img
        className="min-h-[1.4rem] min-w-[1.4rem]"
        src={Search}
        alt="search"
      />
    </button>
    {isOpenSearch && <SearchOpenForSmallScreen />}
  </div>
)
const SearchOpenForSmallScreen = () => (
  <div
    className="absolute -bottom-[2.6rem] left-[7rem] flex h-[2.55rem] w-[30rem] items-center justify-between rounded-full bg-secondary-400 px-6 py-5 
  sm:-bottom-[6.1rem] sm:-left-52 sm:h-[4.1rem]  sm:w-[20rem]"
  >
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

const InputSearch = () => {
  const isAboveSmallScreen = useMediaQuery('(min-width: 1060px)')
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false)
  
  if (isAboveSmallScreen) return <SearchFullScreen />
  return (
    <SearchSmallScreen
      isOpenSearch={isOpenSearch}
      setIsOpenSearch={setIsOpenSearch}
    />
  )
}

export default InputSearch
