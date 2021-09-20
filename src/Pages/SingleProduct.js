import React from 'react'
import styled from 'styled-components'
import ProdductImages from '../components/ProdductImages'
import { singleProduct } from '../components/SingleData'
import Stars from '../components/Stars'
import CheckIcon from '@material-ui/icons/Check'
import AddToCart from '../components/AddToCart'
import SingleProductAcc from '../components/SingleProductAcc'
import FeedBack from '../components/FeedBack'
import Divider from '@material-ui/core/Divider'
import Tabs from '../components/Tabs'
export const SingleProduct = () => {
  const {
    images,
    name,
    price,
    stars,
    reviews,
    strenght,
    description,
    subDescription,
    PackageSize,
    stock,
    questions,
  } = singleProduct[0]

  return (
    <Wrapper className='section'>
      <article className='section__center center'>
        <ProdductImages images={images} />
        <section className='content'>
          <h1>{name}</h1>
          <h5 className='price'>${price}</h5>
          <Stars stars={stars} reviews={reviews} />
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

          <div className='strenght'>{strenght}</div>
          <div className='size'>{PackageSize}</div>

          {stock > 0 && <AddToCart product={singleProduct[0]} />}
          <hr />
          <p className='desc'>{description}</p>
          <div className='btn__wrapper'>
            <button className='btn2'>add to cart</button>
          </div>
        </section>
      </article>
      <section className='section'>
        <div className='title__wrapper'>
          <h2 className='title'>
            Frequently Asked <span className='subtitle'>Question?</span>
          </h2>
        </div>
        <article className='section__center acc__center'>
          <SingleProductAcc questions={questions} />
        </article>

        <Divider variant='middle' />
        {/* <Tabs /> */}
        <FeedBack />
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  .center {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }
  .price {
    color: var(--darkHeading);
  }
  em {
    font-weight: 400;
  }
  h1 {
    position: relative;
    padding-bottom: 12.5px;
    margin-bottom: 12.5px;
  }
  p {
    margin: 0 0 15px 0;
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
  .desc {
    text-align: left;
    font-weight: 400;
    color: var(--darkpara);
    /* letter-spacing: var(--letterSpacing); */
  }
  h1::after {
    position: absolute;
    display: block;
    content: '';
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 2px;
    background: #000;
  }
  .btn__wrapper {
    margin-top: 1rem;
    display: block;
  }
  .btn2 {
    text-transform: uppercase;
    display: inline-block;
    min-width: 220px;
    max-width: 100%;
    padding: 10px 20px 6px;
    margin: 0;
    line-height: 1.42;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    background-color: transparent;
    color: #000;
    border: 2px solid var(--darkHeading);
    width: 100%;
    padding: 12px 20px;
    padding: 14px 20px 10px;
    font-size: 1em;
    transition: var(--transition);
  }
  .btn2:hover {
    color: var(--white);
    background: var(--darkpara);
  }
  .section {
    background: var(--white);
  }
`
