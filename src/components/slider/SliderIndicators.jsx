import React from 'react'

export default function SliderIndicators({item, currentIndex, switchIndex }) {
  return (
    <div className="carousel-indicators">
      {item.map((_, index) => (
        <button
          className={`carousel-indicator-item${currentIndex === index ? " active" : ""}`}
          onClick={() => switchIndex(index)}
        ></button>
      ))}
    </div>
  )
}
