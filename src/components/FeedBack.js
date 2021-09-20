import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import Flag from '../images/Flag.png'
import Stars from './Stars'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt'
import ScreenShareIcon from '@material-ui/icons/ScreenShare'
import { Divider } from '@material-ui/core'
import ReviewHeader from './ReviewHeader'
const data = [
  {
    id: 1,
    name: 'Nimra',
    date: '1/6/2021',
    stars: '4.2',
    country: 'pakistan',
    svg: Flag,
    title: 'Hair loss',
    text: 'Mai ganji ho gae hon please bataein kia kron ',
  },
  {
    id: 2,
    name: 'Dani',
    date: '1/6/2021',
    stars: '4.2',
    country: 'England',
    svg: Flag,
    title: 'Hair loss',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.Maiores odit eveniet voluptatem quae, dolores voluptatum eaad perferendis. Nobis, voluptates. ',
  },
]
const FeedBack = () => {
  return (
    <Wrapper className='section'>
      <div className='title__wrapper'>
        <h2 className='title'>
          What people are <span className='subtitle'>saying?</span>
        </h2>
      </div>
      <ReviewHeader />
      <section className='section__center'>
        {data.map((review) => {
          const { id, name, date, country, svg, stars, title, text } = review
          return (
            <article className='review' key={id}>
              <header>
                <div className='info'>
                  <Avatar name={name.slice(0, 1)} />
                </div>
                <div className='date'>
                  <p>{date}</p>
                </div>
                <strong>{name}</strong>
                <div className='location'>
                  <span className='flag'>
                    {/* <svg /> */}
                    <img src={svg} alt='' />
                  </span>
                  <span>{country}</span>
                </div>
                <div className='stars'>
                  <Stars stars={stars} />
                </div>
              </header>
              <footer>
                <div className='title__review'>{title}</div>
                <p>{text}</p>
              </footer>
              {/* <Divider /> */}
              {/* <hr /> */}
              <article className='footer__review' style={{ marginTop: '10px' }}>
                <div className='share'>
                  <div className='share__wrapper'>
                    <span className='share__icon'>
                      <ScreenShareIcon />
                    </span>
                    <span className='share__text'>Share</span>
                  </div>
                </div>
                <div className='like__section'>
                  Was it helpful?
                  <span style={{ display: 'inline-block' }}>
                    <ThumbUpIcon />
                  </span>
                  1
                  <span>
                    <ThumbDownAltIcon />
                  </span>
                  2
                </div>
              </article>
              <article className='reply'>
                <div className='reply__header'>
                  <div className='reply__header__title'>UK Meds</div>
                  <div className='reply__header__date'>12/5/2021</div>
                </div>
                <div className='reply__text'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maiores odit eveniet voluptatem quae, dolores voluptatum ea
                    ad perferendis. Nobis, voluptates.
                  </p>
                </div>
              </article>
              <Divider style={{ margin: '1rem' }} />
            </article>
          )
        })}
      </section>
    </Wrapper>
  )
}

export default FeedBack
const Wrapper = styled.section`
  background: var(--white);
  /* div {
    
  } */
  .strong {
    font-weight: 700;
    color: var(--darkHeading);
  }
  .title__review {
    color: var(--darkHeading);
    font-size: 15px;
    line-height: 24px;
    min-height: 15px;
    margin: 5px 0 0;
    padding: 0;
    border: none;
    font-weight: 700;
    text-align: left;
  }
  .info {
    float: left;
  }
  .location {
    color: #999;
    font-size: 12px;
    font-weight: 400;
    text-transform: capitalize;
  }

  .date {
    float: right;
    color: #999;
    font-size: 12px;
    font-weight: 400;
  }
  .flag {
    width: 18px;
    max-width: 18px;
    min-width: 18px;
    line-height: 0;
    margin-right: 2px;
  }
  .flag img {
    width: 18px;
    max-width: 18px;
    min-width: 18px;
    display: inline-block;
    vertical-align: bottom;
    margin: 3px 3px 3px 1px !important;
    line-height: 0;
    height: 18px;
  }
  footer {
    display: grid;
    /* grid-template-rows: 1fr 1fr; */
  }
  footer p {
    color: #6b6d76;
    max-width: 100%;
  }
  .stars svg {
    width: 1.2rem;
  }
  .footer__review {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .share,
  .like__section {
    text-align: left;
    font-size: 12px;
    display: block;
    text-transform: capitalize;

    color: #999;
  }
  .share svg {
    font-size: 20px;
    color: #6b6d76;
    color: var(--darkHeading);
  }
  .like__section svg {
    font-size: 15px;
    margin: 0 6px;
  }
  .like__section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .share__wrapper {
    color: #6b6d76;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
  }
  .share__icon {
    margin-right: 4px;
  }
  .reply {
    background: 0 0;
    margin: 15px 0 0 35px;
    padding: 10px 0 0 15px;
    border-left: 5px solid #e0e0e0;
  }

  .reply__header {
    float: right;
    color: #999;
    font-size: 12px;
    font-weight: 400;
  }
  .reply__header {
    font-size: 14px;
    width: 100%;
    line-height: 18px;
  }
  .reply__header__title {
    clear: none;
    float: left;
    margin: 0;
    color: var(--darkHeading);
    font-weight: 700;
  }
  .reply__header__date {
    float: right !important;
    color: #999;
    font-size: 13px;
    font-weight: 400;
  }
  .reply__text {
    clear: both;
    padding-top: 5px;
    color: #999;
  }
`
