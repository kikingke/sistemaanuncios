import React,{useState,useEffect,useRef} from 'react'
import '../../styles/imgslider.css'
import ImgSliderItem from './ImgSliderItem'
import SliderControls from './SliderControls';
import SliderIndicators from './SliderIndicators';

export default function ImgSlider({item,interval = 5000, controls = true, indicators = false, autoPlay = true, width = 300}) {
const [currentSlide, setCurrentSlide] = useState(0);

const slideInterval = useRef();

const prev=(e)=>{
  e.preventDefault();
  const index = currentSlide > 0 ? currentSlide - 1: item.imgurl.length -1;
  setCurrentSlide(index);
}

const next=(e)=>{
  e.preventDefault();
  const index = currentSlide < item.imgurl.length - 1 ? currentSlide + 1:0;
  setCurrentSlide(index);
}

const switchIndex = (index) => {
  startSlideTimer()
  setCurrentSlide(index)
}

const startSlideTimer = () => {
  if (autoPlay) {
      stopSlideTimer()
      slideInterval.current = setInterval(() => {
          setCurrentSlide(currentSlide => currentSlide < item.imgurl.length - 1 ? currentSlide + 1 : 0)
      }, interval)
  }
}

const stopSlideTimer = () => {
  if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current)
  }
}

useEffect(() => {
  startSlideTimer();

  return () => stopSlideTimer();
}, []);


  return (
    <div className='sliderContainer'>
      <div className="slider-inner"
      style={{transform:`translateX(${-currentSlide * 100}%)`}}
      >
        {
              item.imgurl.map((item,index)=>(
                <ImgSliderItem 
                  item={item} 
                  key={index}  
                  stopSlide={stopSlideTimer}
                  startSlide={startSlideTimer} />
                )) 
              }
              
      </div>
      {indicators && <SliderIndicators item={item} currentIndex={currentSlide} switchIndex={switchIndex} />}
            {controls && <SliderControls prev={prev} next={next} />}
    </div>
  )
}
