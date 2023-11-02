import CardCategories from '@/components/CardCategories'
import { SelectedPage } from '@/types/home'
import { motion } from 'framer-motion'
import forWedding from '@/assets/photo/Каталог для свадьбы.png'
import forHim from '@/assets/photo/Каталог для него.png'
import bracelet from '@/assets/photo/Каталог браслеты.png'
import ring from '@/assets/photo/Каталог кольца.png'
import pendants from '@/assets/photo/Каталог кулоны.png'
import earrings from '@/assets/photo/Каталог серьги.png'
import { ButtonPageWithArrow } from '@/components/Buttons/ButtonPage'
import useMediaQuery from '@/hooks/useMediaQuery'
import Section from '@/components/Section'

type Props = {
  setSelectedPage: (val: SelectedPage) => void
}
const CategoriesMobileScreen = () => (
  <>
    <h2 className="pb-[1.5rem] text-center font-bergamasco text-[3rem] ">
      Найдите для себя идеальное украшение
    </h2>
    <div className="mx-auto flex flex-col">
      <CardCategories text="Для свадьбы" img={forWedding} link='catalog/forWedding'/>
      <CardCategories text="Серьги" img={earrings} link='catalog/earrings'/>
      <CardCategories text="Браслеты" img={bracelet} link='catalog/bracelets'/>
      <CardCategories text="Для него" img={forHim} link='catalog/forHim'/>
      <CardCategories text="Кольца" img={ring} link='catalog/rings'/>
      <CardCategories text="Кулоны и медальоны" img={pendants} link='catalog/pendants'/>
    </div>
    <div className="flex justify-end">
      <ButtonPageWithArrow link='catalog' style="w-[14.8rem] text-[1.5rem] mt-[1.625rem] gap-[1.1rem]">
        ВСЕ УКРАШЕНИЯ
      </ButtonPageWithArrow>
    </div>
  </>
)
const CategoriesMediumScreen = () => (
  <>
    <h2 className="text-center font-bergamasco text-[6.875rem] leading-[7rem] mb-[2rem]">
      Найдите для себя идеальное украшение
    </h2>
    <div className="mb-[7.1rem] h-[1px] w-full bg-primary-500" />
    <div className="flex flex-col">
      <div className="flex">
        <CardCategories text="Для свадьбы" img={forWedding} link='catalog/forWedding'/>
        <CardCategories text="Серьги" img={earrings} link='catalog/earrings'/>
        <div className="flex-grow border-[1px] border-primary-500" />
      </div>
      <div className="flex">
        <CardCategories text="Браслеты" img={bracelet} link='catalog/bracelets'/>
        <div className="flex-grow border-[1px] border-primary-500" />
        <CardCategories text="Для него" img={forHim} link='catalog/forHim'/>
      </div>
      <div className="flex">
        <CardCategories text="Кольца" img={ring} link='catalog/rings'/>
        <CardCategories text="Кулоны и медальоны" img={pendants} link='catalog/pendants'/>
        <div className="flex-grow border-[1px] border-primary-500" />
      </div>
    </div>
    <div className="flex justify-end">
      <ButtonPageWithArrow link='catalog' style="w-[14.8rem] text-[1.5rem] mt-[1.625rem] gap-[1.1rem]">
        ВСЕ УКРАШЕНИЯ
      </ButtonPageWithArrow>
    </div>
  </>
)

const CategoriesFullScreen = () => (
  <>
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="pb-[4rem] text-center font-bergamasco text-[8rem] leading-[7rem]"
    >
      Найдите для себя идеальное украшение
    </motion.h2>
    <div className="mb-[2.5rem] h-[1px] w-full bg-primary-500" />
    <div className="flex flex-col">
      <div className="flex">
        <CardCategories text="Для свадьбы" img={forWedding} link='catalog/forWedding'/>
        <div className="flex-grow border-[1px] border-primary-500" />
        <CardCategories text="Серьги" img={earrings} link='catalog/earrings'/>
        <CardCategories text="Браслеты" img={bracelet} link='catalog/bracelets'/>
      </div>
      <div className="flex">
        <CardCategories text="Кулоны и медальоны" img={pendants} link='catalog/pendants'/>
        <CardCategories text="Для него" img={forHim} link='catalog/forHim'/>
        <div className="flex-grow border-[1px] border-primary-500" />
        <CardCategories text="Кольца" img={ring} link='catalog/rings'/>
      </div>
    </div>
    <div className="flex justify-end">
      <ButtonPageWithArrow link='catalog' style="w-[14.8rem] text-[1.5rem] mt-[1.625rem] gap-[1.1rem]">
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
    <Section id={SelectedPage.Категории}>
      <motion.div
        className="mx-auto flex flex-col"
        onViewportEnter={() => setSelectedPage(SelectedPage.Категории)}
      >
        <CategoriesContent />
      </motion.div>
    </Section>
  )
}

export default Categories
