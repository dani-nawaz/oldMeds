import React from 'react'
import styled from 'styled-components'
// import { data } from '../components/cardData'
import { cardData } from '../data/cardData'
import { singleProduct } from '../components/SingleData'
import CheckIcon from '@material-ui/icons/Check'

export const Products = () => {
  const {
    images,
    name,
    price,
    stars,
    reviews,
    strenght,
    description,
    category,
    subDescription,
    PackageSize,
    stock,
  } = singleProduct[0]
  const { url } = images[0]

  return (
    <Wrapper className='section '>
      <div className='title__wrapper'>
        <h2 className='title'>
          our <span className='subtitle'>products</span>
        </h2>
      </div>
      <section className='section'>
        <article className='section__center'>
          <h3 className=' main'>{category}</h3>
          <p>{description}</p>
        </article>
      </section>
      <div className='section__center card__center'>
        <article className='card'>
          <div className='img__container'>
            <img src={url} alt='s' />
          </div>
          <div className='card__info'>
            <div className='info'>
              <h4 className='card__title'>{name}</h4>
              <div
                className='title-underline'
                style={{ width: '2rem', marginLeft: '0' }}
              ></div>

              <div>
                {subDescription.map(({ id, text }) => {
                  return (
                    <p key={id}>
                      <CheckIcon />
                      <em>{text}</em>
                    </p>
                  )
                })}
              </div>
            </div>
            <div className='btnC'>
              <div className='flex'>
                <h4>${price}</h4>
              </div>

              <button className='btn2' style={{ marginTop: '1rem' }}>
                View Product
              </button>
            </div>
          </div>
        </article>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: var(--grey-100);
  p {
    color: var(--darkpara);
    text-transform: capitalize;
  }
  .main {
    text-align: left;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 0.5rem;
  }
  .flex {
    justify-self: flex-end;
    margin-top: 2rem;
    align-self: flex-end;
  }
  .btn2 {
    background-color: transparent;
    border: 2px solid var(--darkpara);
    text-transform: uppercase;
    padding: 0.6rem 1rem;
    color: var(--darkHeading);
    /* font-weight: bold; */
    transition: var(--transition);
    text-align: left;
  }
  .card:hover .title-underline {
    background-color: var(--button);
    width: 7.1rem;
  }
  .btnC {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  em {
    font-weight: 400;
  }
  p {
    margin: 0 0 15px 0;
    margin-left: 0;
    margin-bottom: 0;
    font-size: 1rem;
    position: relative;
    /* color: var(--darkpara); */
    svg {
      color: var(--darkpara);
      position: relative;
      top: 6px;
      right: 6px;
    }
  }

  .card__info {
    padding: 1.2rem 1.5rem;
    color: var(--darkpara);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .img__container {
    width: 100%;
    background-color: var(--white);
    align-self: center;
    justify-self: center;
    /* max-width: 200px; */
    padding: 43px;
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
    padding: 40px;
    transition: var(--mainTransition);
    color: #0f3433;
    transition: var(--transition);
    display: flex;
    display: grid;
    grid-template-columns: 300px 390px;
    border-right: 1px solid #d8e5e8;
    border-left: 1px solid #d8e5e8;
    font-weight: 400;
  }
  .card:hover {
    box-shadow: var(--shadow-3);
    border-bottom: 4px solid var(--button);
  }
  @media screen and (min-width: 768px) {
    .card__center {
      display: grid;
      justify-content: center;
      grid-template-columns: 1fr;
      grid-column-gap: 1rem;
    }
  }
  @media screen and (min-width: 1170px) {
    .card__center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
      justify-content: center;
    }
  }
`
