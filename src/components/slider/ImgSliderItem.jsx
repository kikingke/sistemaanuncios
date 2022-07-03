import React from 'react'


export default function ImgSliderItem({item,stopSlide,startSlide}) {
  return (
    <>
    <div className='slider-item' onMouseEnter={stopSlide} onMouseOut={startSlide}>
        <img src={item} alt="" className='imgitemslider'  />
    </div>
    </>
  )
}
