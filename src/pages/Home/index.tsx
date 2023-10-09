import Navbar from "@/components/Navbar";
import Jewerly from "./Jewerly";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/types/home";

function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Главная
  )
  const [isPageTop, setIsPageTop] = useState<boolean>(true)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsPageTop(true)
        setSelectedPage(SelectedPage.Главная)
      }
      if (window.scrollY !== 0) {
        setIsPageTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="home">
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} isPageTop={isPageTop}/>
      <Jewerly/>
      
    </div>
  );
}
export default Home;
