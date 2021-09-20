import React from 'react'
import styled from 'styled-components'
import { cardData } from '../data/cardData'

export const About = () => {
  return (
    <Wrapper className='section '>
      <div className='elementar__img'>
        <img
          src='https://nextcare.com/wp-content/uploads/2020/08/home-hero-image.svg'
          alt=''
        />
      </div>
      <div className='title__wrapper'>
        <h2 className='title'>
          How can we help you <span className='subtitle'>today?</span>
        </h2>
      </div>
      <div className='section__center card__center'>
        {cardData.map((card, index) => {
          const { page, links, img } = card
          return (
            <article className='card' key={index}>
              <div className='img__container'>
                <img
                  src='https://www.mqhealth.org.au/__data/assets/image/0004/991723/1.png'
                  alt=''
                />
              </div>
              <div className='card__footer'>
                <div
                  className='title-underline'
                  style={{ marginBottom: '1rem' }}
                ></div>
                <h4 className='card__title'>{page}</h4>

                <div className='card__links'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <a key={index} href={url}>
                        {label}

                        {icon}
                      </a>
                    )
                  })}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: var(--blue);
  background-image: url(https://nextcare.com/wp-content/uploads/2020/08/homepage-hero-shape.svg);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: auto;

  .card:hover .title-underline {
    background-color: var(--button);
    width: 7.1rem;
  }
  /* .card__center::before {
    content: 'asd';
    background-image: url(https://nextcare.com/wp-content/uploads/2020/08/home-hero-image.svg);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: auto;
    z-index: -1;
  } */
  /* .elementar__img img {
    vertical-align: middle;
    display: inline-block;
    height: auto;
    max-width: 100%;
    z-index: -1;
  } */
  .card__footer {
    padding: 1.2rem 1.5rem;
    color: var(--darkpara);
  }
  .img__container {
    width: 100%;
    background-color: var(--white);
  }
  .img__container img {
    width: 100%;
    height: 100%;
  }
  a {
    display: inline-block;
  }
  .card__title {
    text-transform: capitalize;
    color: var(--darkHeading);
  }
  .card__links {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.25rem;
  }
  .card__links a {
    display: block;
    color: var(--darkpara);
    display: flex;
    padding-left: 1rem;

    /* justify-content: space-evenly; */
    text-transform: capitalize;
    align-items: center;
  }
  .card__links svg {
    color: var(--darkHeading);
    margin-left: 1rem;
  }

  .card {
    border: 1px solid #eaebed;
    margin-bottom: 4rem;
    box-shadow: var(--shadow-1);
    background-color: var(--white);
    border-bottom: 4px solid #ef4565;

    transition: var(--mainTransition);
    color: #0f3433;
    transition: var(--transition);
  }
  .card:hover {
    box-shadow: var(--shadow-3);
    border-bottom: 4px solid var(--button);
  }
  @media screen and (min-width: 768px) {
    .card__center {
      display: grid;
      justify-content: center;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 1rem;
    }
  }
  @media screen and (min-width: 1170px) {
    .card__center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 1rem;
      justify-content: center;
    }
  }
`
