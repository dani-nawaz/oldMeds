import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import FavoriteIcon from '@material-ui/icons/Favorite'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

import '../styles.css'

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core'
import styled from 'styled-components'
import { data } from './cardData'
import ReviewCard from './ReviewCard'
// install Swiper modules
SwiperCore.use([Pagination])

export const Reviews = () => {
  return (
    <Wrapper className='section'>
      <div className='title__wrapper'>
        <h2 className='title reviews'>
          See What Our Patients Are <span className='subtitle'>Saying </span>
          <span>
            <FavoriteIcon />
          </span>
        </h2>
      </div>

      <div className='section__center swiper__center '>
        <Swiper
          style={{}}
          slidesPerView={3}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          className='mySwiper'
        >
          {data.map((card, index) => {
            return (
              <SwiperSlide id={index}>
                <ReviewCard card={card} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background-color: var(--blue);
  background-image: url('https://nextcare.com/wp-content/uploads/2020/08/home-health-resources-shape.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: auto;
  position: relative;
  .reviews {
  }
  svg {
    color: #ef4565;
    font-size: 3rem;
    position: absolute;
    top: 50px;
    /* transform: rotatey(90deg); */
    /* right: 0; */

    margin-left: -1.5rem;
  }
  .mySwiper {
    background-image: url('https://nextcare.com/wp-content/uploads/2020/08/health-resources-image.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
  }
  .swiper__center {
    position: relative;
  }
  @media screen and (min-width:1100px){
.swiper__center::before {
    content: '';
    width: 350px;
    position: absolute;
    height: 90%;

    top: 0;
    left: 0;
    background-image: linear-gradient(
      to right,
      rgba(216, 238, 254, 1) 10%,
      rgba(216, 238, 254, 0) 100%
    );
    z-index: 20;
  }
  .swiper__center::after {
    content: '';
    width: 350px;
    position: absolute;
    height: 90%;
    top: 0;
    right: 0;
    background-image: linear-gradient(
      to left,
      rgba(216, 238, 254, 1) 10%,
      rgba(216, 238, 254, 0) 100%
    );
    z-index: 20;
  }
  }
  
`
