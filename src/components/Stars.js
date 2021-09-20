import React from 'react'
import styled from 'styled-components'
import StarIcon from '@material-ui/icons/Star'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
const Stars = ({ stars, reviews, fontSize }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <StarIcon />
        ) : stars >= number ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
    )
  })

  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      {reviews > 0 ? <p className='reviews'>{reviews} customer reviews</p> : ''}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  span {
    color: var(--darkpara);
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-top: 0;
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
