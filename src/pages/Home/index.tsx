import Navbar from "@/components/Navbar";
import Jewerly from "./Jewerly";
import { useState } from "react";
import { SelectedPage } from "@/types/home";

function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Главная
  )

  return (
    <>
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <Jewerly/>
      <div id='бриллиант' className="h-[2000px]"></div>
    </>
  );
}
export default Home;
