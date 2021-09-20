import React from 'react'
import styled from 'styled-components'

const DocBanner = () => {
  return (
    <Wrapper className='section'>
      <div className='section__center'>
        <div className='bannerContainer'>
          <div className='main-info'>
            <div className='info'>
              <h5>Our favourite</h5>
              <h3>Dr Christian Jessen</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                magni. Ex eum laudantium distinctio! Blanditiis perspiciatis
                nulla eum sequi delectus.
              </p>
              <div className='link'> link to video</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default DocBanner
const Wrapper = styled.div`
  background-color: var(--white);
  /* background-color: var(--clr-grey-10); */

  .bannerContainer {
    color: var(--white);
    /* background-color: var(--clr-grey-10); */

    max-width: 1240px;

    /* background-color: var(--darkHeading); */
    background: rgb(9, 64, 103);
    background: linear-gradient(
      90deg,
      rgba(9, 64, 103, 1) 0%,
      rgba(239, 69, 132, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    /* color: var(--whiteBackground); */
    /* display: flex; */
    /* margin: 0 auto; */
    /* padding: 0px 25px; */
    padding-left: 1rem;
    /* max-width: 1240px; */
    /* align-items: center; */
    /* justify-content: space-between; */
  }
  .bannerContainer h5 {
    color: var(--white);
    text-transform: uppercase;
  }
  .info {
    padding: 1rem;
  }
  .main-info {
    padding: 100px 0 70px;
    width: 55%;
  }
  .info p {
    font-size: 1rem;
    color: var(--blue);
  }
`
