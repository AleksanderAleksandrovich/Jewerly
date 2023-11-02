import { ButtonPageWithImg } from '../Buttons/ButtonPage'
import Braslate from '@/assets/icons/Браслеты.svg'
import ForHim from '@/assets/icons/Для него.svg'
import Ring from '@/assets/icons/Кольца.svg'
import Pendants from '@/assets/icons/Кулоны и медальоны.svg'
import Earrings from '@/assets/icons/Серьги.svg'
import ForWedding from '@/assets/icons/Для свадьбы.svg'
import Brilliant from '@/assets/icons/Brilliant.svg'

const Catalog = () => {
  return (
    <div className="flex flex-col gap-2 py-4 pt-6">
      <ButtonPageWithImg page="Новинки" img={Brilliant} link="/catalog/news" />
      <ButtonPageWithImg
        page="Кулоны и медальоны"
        img={Pendants}
        link="/catalog/pendants"
      />
      <ButtonPageWithImg page="Кольца" img={Ring} link="/catalog/rings" />
      <ButtonPageWithImg
        page="Серьги"
        img={Earrings}
        link="/catalog/earrings"
      />
      <ButtonPageWithImg
        page="Браслеты"
        img={Braslate}
        link="/catalog/bracelets"
      />
      <ButtonPageWithImg
        page="Для свадьбы"
        img={ForWedding}
        link="/catalog/forWedding"
      />
      <ButtonPageWithImg page="Для него" img={ForHim} link="/catalog/forHim" />
    </div>
  )
}

export default Catalog
