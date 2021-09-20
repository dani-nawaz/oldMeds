import React from 'react'
import styled from 'styled-components'
import { singleProduct } from './SingleData'
import Stars from './Stars'
import ForumIcon from '@material-ui/icons/Forum'
import RateReviewIcon from '@material-ui/icons/RateReview'
import { Divider } from '@material-ui/core'
import FormControl from './FormControl'
import FormControlR from './FormControlR'
const ReviewHeader = () => {
  const { stars, reviews } = singleProduct[0]
  return (
    <Wrapper className='section'>
      <section className='section__center'>
        <div className='grid'>
          <div className='summary__overview'>
            <div>
              <span className='rate'>
                <strong>4.7</strong>
              </span>
              <span className='stars'>
                <Stars stars={stars} />
              </span>
            </div>
            <div>
              <span className='reviewsText'>Based on {reviews} reviews</span>
            </div>
          </div>

          <div className='flex'>
            <FormControlR />
            <FormControl />
          </div>

          {/* <div className='btns'>
            <div className='question'>
              <button className='questionSpan'>
                <span className='icon'>
                  <RateReviewIcon />
                </span>
                Ask a question
              </button>
            </div>
            <div className='writeReview'></div>
            <button className='reviewSpan'>
              <span className='icon'>
                <ForumIcon />
              </span>
              write a review
            </button>
          </div> */}
        </div>
        <Divider style={{ margin: '1rem' }} />
      </section>
    </Wrapper>
  )
}

export default ReviewHeader
const Wrapper = styled.section`
  .stars {
    display: inline-block;
  }
  .flex {
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    display: inline-block;
    /* display: flex; */
    align-self: center;
    justify-self: center;
    margin-right: 1rem;
    /* margin: 0 auto; */

    /* margin-top: 1rem; */
  }
  .icon svg {
    font-style: normal;
    font-weight: 400;
    text-decoration: inherit;
    padding-right: 8px;
    color: #6b6d76;
  }
  .btns {
    display: flex;
    align-items: end;
    justify-content: flex-end;
  }
  .questionSpan,
  .reviewSpan {
    font-size: 14px;
    text-decoration: none;
    font-weight: 400;
    text-align: center;
    width: auto;
    height: 50px;
    line-height: 30px;
    background: 0 0;
    color: #000;
    border: 1px solid #ccd6e0;
    padding: 3px 20px;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
  .question,
  .writeReview {
    margin: 0 0 0 18px;
  }
  .reviewsText {
    color: #6b6d76;
    text-transform: capitalize;
    font-size: 20px;
    margin-top: 10px;
  }
  .rate {
    font-size: 37px;
    line-height: 30px;
    font-weight: 700;
    margin-right: 5px;
    margin-top: 0;
    color: var(--darkHeading);
  }
  strong {
    font-weight: 700;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* border: 2px solid red; */
    grid-gap: 1rem;
  }
`
