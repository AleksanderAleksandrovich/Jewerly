import CardCategories from '@/components/CardCategories'
import { SelectedPage } from '@/types/home'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (val: SelectedPage) => void
}

const Categories = ({ setSelectedPage }: Props) => {
  return (
    <section id="категории" className="mx-24 pt-28 sm:mx-14 sm:pt-32">
      <motion.div
        className="mx-auto flex flex-col"
        onViewportEnter={() => setSelectedPage(SelectedPage.Категории)}
      >
        <h2 className="text-center font-bergamasco text-[3rem] pb-[1.5rem]">
          Найдите для себя идеальное украшение
        </h2>
        <div className='flex flex-col mx-auto'>
          <CardCategories/>
        </div>
      </motion.div>
    </section>
  )
}

export default Categories
