import React from 'react'

export default function SliderControls({ prev, next }) {
  return (
    <div>
        <button className="slider-control left" onClick={prev}><i className="bi bi-arrow-left"></i></button>
        <button className="slider-control right" onClick={next}><i className="bi bi-arrow-right"></i></button>
    </div>
  )
}
