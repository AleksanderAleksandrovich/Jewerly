import CardCategories from '@/components/CardCategories'
import { SelectedPage } from '@/types/home'
import { motion } from 'framer-motion'
import forWedding from '@/assets/photo/Каталог для свадьбы.png'
import forHim from '@/assets/photo/Каталог для него.png'
import bracelet from '@/assets/photo/Каталог браслеты.png'
import ring from '@/assets/photo/Каталог кольца.png'
import pendants from '@/assets/photo/Каталог кулоны.png'
import earrings from '@/assets/photo/Каталог серьги.png'
import { ButtonPageWithArrow } from '@/components/Buttons/ButtonPageWithArrow'
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {
  setSelectedPage: (val: SelectedPage) => void
}
const CategoriesMobileScreen = () => (
  <>
    <h2 className="pb-[1.5rem] text-center font-bergamasco text-[3rem] ">
      Найдите для себя идеальное украшение
    </h2>
    <div className="mx-auto flex flex-col">
      <CardCategories text="Для свадьбы" img={forWedding} />
      <CardCategories text="Серьги" img={earrings} />
      <CardCategories text="Браслеты" img={bracelet} />
      <CardCategories text="Для него" img={forHim} />
      <CardCategories text="Кольца" img={ring} />
      <CardCategories text="Кулоны и медальоны" img={pendants} />
    </div>
    <div className="flex justify-end">
      <ButtonPageWithArrow style="w-[14.8rem] text-[1.5rem] mt-[1.625rem] gap-[1.1rem]">
        ВСЕ УКРАШЕНИЯ
      </ButtonPageWithArrow>
    </div>
  </>
)
const CategoriesMediumScreen = () => (
  <>
    <h2 className="text-center font-bergamasco text-[6.875rem]">Найдите</h2>
    <h2 className="-mt-[2.5rem] text-center font-bergamasco text-[6.875rem]">
      для себя идеальное
    </h2>
    <h2 className="-mt-[2.5rem] pb-[4rem] text-center font-bergamasco text-[6.875rem]">
      украшение
    </h2>
    <div className="mb-[7.1rem] h-[1px] w-full bg-primary-500" />
    <div className="flex flex-col">
      <div className="flex">
        <CardCategories text="Для свадьбы" img={forWedding} />
        <CardCategories text="Серьги" img={earrings} />
        <div className="flex-grow border-[1px] border-primary-500" />
      </div>
      <div className="flex">
        <CardCategories text="Браслеты" img={bracelet} />
        <div className="flex-grow border-[1px] border-primary-500" />
        <CardCategories text="Для него" img={forHim} />
      </div>
      <div className="flex">
        <CardCategories text="Кольца" img={ring} />
        <CardCategories text="Кулоны и медальоны" img={pendants} />
        <div className="flex-grow border-[1px] border-primary-500" />
      </div>
    </div>
    <div className="flex justify-end">
      <ButtonPageWithArrow style="w-[14.8rem] text-[1.5rem] mt-[1.625rem] gap-[1.1rem]">
        ВСЕ УКРАШЕНИЯ
      </ButtonPageWithArrow>
    </div>
  </>
)
const CategoriesFullScreen = () => (
  <>
    <h2 className="text-center font-bergamasco text-[8rem]">
      Найдите для себя
    </h2>
    <h2 className="-mt-[2.5rem] pb-[4rem] text-center font-bergamasco text-[8rem]">
      идеальное украшение
    </h2>
    <div className="mb-[2.5rem] h-[1px] w-full bg-primary-500" />
    <div className="flex flex-col">
      <div className="flex">
        <CardCategories text="Для свадьбы" img={forWedding} />
        <div className="flex-grow border-[1px] border-primary-500" />
        <CardCategories text="Серьги" img={earrings} />
        <CardCategories text="Браслеты" img={bracelet} />
      </div>
      <div className="flex">
        <CardCategories text="Кулоны и медальоны" img={pendants} />
        <CardCategories text="Для него" img={forHim} />
        <div className="flex-grow border-[1px] border-primary-500" />
        <CardCategories text="Кольца" img={ring} />
      </div>
    </div>
    <div className="flex justify-end">
      <ButtonPageWithArrow style="w-[14.8rem] text-[1.5rem] mt-[1.625rem] gap-[1.1rem]">
        ВСЕ УКРАШЕНИЯ
      </ButtonPageWithArrow>
    </div>
  </>
)

const CategoriesContent = () => {
  const isAboveFullScreen = useMediaQuery('(min-width: 1300px)')
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')
  if (isAboveFullScreen) return <CategoriesFullScreen />
  if (isAboveMediumScreen) return <CategoriesMediumScreen />
  else return <CategoriesMobileScreen />
}
const Categories = ({ setSelectedPage }: Props) => {
  return (
    <section id="категории" className="mx-24 pt-28 sm:mx-14 sm:pt-24">
      <motion.div
        className="mx-auto flex flex-col"
        onViewportEnter={() => setSelectedPage(SelectedPage.Категории)}
      >
        <CategoriesContent />
      </motion.div>
    </section>
  )
}

export default Categories
