import Navbar from '@/components/Navbar'
import Jewerly from './Jewerly'
import { useState } from 'react'
import { SelectedPage } from '@/types/home'
import Brilliant from './Brilliant'
import News from './News'
function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Главная
  )

  return (
    <>
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <Jewerly setSelectedPage={setSelectedPage} />
      <Brilliant setSelectedPage={setSelectedPage} />
      <News setSelectedPage={setSelectedPage} />
      <div className='mb-16'></div>
    </>
  )
}
export default Home
