import './style.css'

type Props = {
  text: string
  img: string
}

const SliderImg = ({ text, img }: Props) => {
  return (
    <div className="container_slider_full">
      <div className="image-container_slider_full">
        <img src={img} alt={img} className="image_slider" />
        <div className="overlay_slider_full">
          <div className="text_slider_full flex items-center justify-center font-bergamasco text-[3rem] md:text-[6rem] xl:text-[6.9rem]">
            {text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderImg
