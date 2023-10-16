import React from 'react'
import Ring from '@/assets/photo/Картинка кольца Категории.png'
import './index.css'
type Props = {
  style?: string|null
}

const CardCategories = ({ style = null }: Props) => {
  return (
    <div className="container">
  <div className="image-container">
    <img src={Ring} alt="Your Image" className="image" />
    <div className="overlay">
      <div className="text">Для свадьбы</div>
    </div>
  </div>
</div>
  )
}

export default CardCategories
