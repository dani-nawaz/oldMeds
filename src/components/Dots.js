import React from 'react'
export const data = [
  {
    title: 'Covid-19 Testing Clininc',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate atque a mollitia autem placeat quod.',
    urls: 'https://trustcarehealth.com/uploads/slider/COVID-Testing-Clinic-Rotator-Dec2020.jpg',
  },
  {
    title: 'Covid-19 Vaccine Sign-up',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate atque a mollitia autem placeat quod.',
    urls: 'https://trustcarehealth.com/uploads/slider/Vaccine-Rotator.jpg',
  },
  {
    title: 'Reclaim the Outdoor',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate atque a mollitia autem placeat quod.',
    urls: 'https://trustcarehealth.com/uploads/slider/TrustCare-Allergies-Rotator.jpg',
  },
]
const Dots = (props) => {
  return (
    <div className='all-dots'>
      {data.map((slide, index) => {
        return (
          <span
            key={index}
            className={`${
              props.activeIndex === index ? 'dot active-dot' : 'dot'
            }`}
            onClick={(e) => {
              props.onClick((e.target.value = index))
            }}
          ></span>
        )
      })}
    </div>
  )
}

export default Dots
