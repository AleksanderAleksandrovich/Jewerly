import Navbar from '@/components/Navbar'
import Jewerly from './Jewerly'
import { useState } from 'react'
import { SelectedPage } from '@/types/home'
import Brilliant from './Brilliant'

function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Главная
  )

  return (
    <>
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <Jewerly setSelectedPage={setSelectedPage} />
      <Brilliant setSelectedPage={setSelectedPage} />
    </>
  )
}
export default Home
