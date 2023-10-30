import './index.css'
import ButtonCardCategoties from './buttonCardCategoties'
import useMediaQuery from '@/hooks/useMediaQuery'
type Props = {
  text: string
  img: string
}
const CardMobileScreen = ({ img, text }: Props) => (
  <div className="container">
    <div className="image-container">
      <img src={img} alt={img} className="image" />
      <div className="overlay">
        <div className="text">{text}</div>
        <ButtonCardCategoties />
      </div>
    </div>
  </div>
)
const CardMediumScreen = ({ img, text }: Props) => (
  <div className="container_med">
    <div className="image-container">
      <img src={img} alt={img} className="image" />
      <div className="overlay">
        <div className="text_med">{text}</div>
        <ButtonCardCategoties />
      </div>
    </div>
  </div>
)
const CardFullScreen = ({ img, text }: Props) => (
  <div className="container_full">
    <div className="image-container_full">
      <img src={img} alt={img} className="image" />
      <div className="overlay_full">
        <div className="text_full">{text}</div>
        <ButtonCardCategoties />
      </div>
    </div>
  </div>
)
const CardCategories = ({ text, img }: Props) => {
  const isAboveFullScreen = useMediaQuery('(min-width: 1300px)')
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')

  if (isAboveFullScreen) {
    return <CardFullScreen img={img} text={text} />
  }
  if (isAboveMediumScreen) {
    return <CardMediumScreen img={img} text={text} />
  }

  return <CardMobileScreen img={img} text={text} />
}

export default CardCategories
