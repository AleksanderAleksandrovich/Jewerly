import Navbar from '@/components/Navbar'
import Jewerly from './Jewerly'
import { useState } from 'react'
import { SelectedPage } from '@/types/home'
import Brilliant from './Brilliant'
import News from './News'
import Categories from './Categories'
import Present from './Present'
import Care from './Care'
import Footer from '@/components/Footer'
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
      <Categories setSelectedPage={setSelectedPage} />
      <Present setSelectedPage={setSelectedPage} />
      <Care setSelectedPage={setSelectedPage}/>
      <Footer setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
    </>
  )
}
export default Home
