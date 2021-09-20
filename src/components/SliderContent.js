import React from 'react'
import { data } from './Dots'
import Slider from './Slider'
const SliderContent = (props) => {
  return (
    <section>
      {data.map((slide, index) => {
        return (
          <div
            className={
              index === props.activeIndex ? 'slides active ' : 'inactive'
            }
          >
            <img className='slide-image' src={slide.urls} alt='' />
            <h3 className='slide-title'>{slide.title}</h3>
            <span></span>
            {/* <div className='title__underline'></div> */}
            <p className='slide-text'>{slide.description}</p>
            <button className='banner-btn'>learn more</button>
          </div>
        )
      })}
    </section>
  )
}

export default SliderContent
