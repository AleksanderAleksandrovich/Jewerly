import Navbar from '@/components/Navbar'
import Jewerly from './Jewerly'
import { useState } from 'react'
import { SelectedPage } from '@/types/home'
import Brilliant from './Brilliant'
import ItemsStore from '@/db/db.json'
import ShopingCard from '@/components/ShopingCard'
function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Главная
  )

  return (
    <>
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <Jewerly setSelectedPage={setSelectedPage} />
      <Brilliant setSelectedPage={setSelectedPage} />
      <div className="mx-14 flex items-center justify-between gap-3 flex-wrap">
        {ItemsStore.map((item) => (
          <ShopingCard key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}
export default Home
