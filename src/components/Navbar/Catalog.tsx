import ButtonPageWithImg from '../Buttons/ButtonPageWithImg'
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
      <ButtonPageWithImg page="Новинки" img={Brilliant} />
      <ButtonPageWithImg page="Кулоны и медальоны" img={Pendants} />
      <ButtonPageWithImg page="Кольца" img={Ring} />
      <ButtonPageWithImg page="Серьги" img={Earrings} />
      <ButtonPageWithImg page="Браслеты" img={Braslate} />
      <ButtonPageWithImg page="Для свадьбы" img={ForWedding} />
      <ButtonPageWithImg page="Для него" img={ForHim} />
    </div>
  )
}

export default Catalog
