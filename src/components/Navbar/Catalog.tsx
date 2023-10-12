import React from 'react'
import ButtonPage from '../Buttons/ButtonPage'
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
      <ButtonPage page="Новинки" img={Brilliant} />
      <ButtonPage page="Кулоны и медальоны" img={Pendants} />
      <ButtonPage page="Кольца" img={Ring} />
      <ButtonPage page="Серьги" img={Earrings} />
      <ButtonPage page="Браслеты" img={Braslate} />
      <ButtonPage page="Для свадьбы" img={ForWedding} />
      <ButtonPage page="Для него" img={ForHim} />
    </div>
  )
}

export default Catalog
