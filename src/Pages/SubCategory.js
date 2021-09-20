import React from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const data = [
  {
    id: 1,
    title: 'Contraceptive Pill ',
    description:
      'Commonly referred to as ‘The Pill’, women’s oral contraceptive tablets are effective at preventing pregnancy when taken once a day.',
  },
  {
    id: 2,
    title: 'Morning After Pill ',
    description:
      'The morning after pill is an emergency contraceptive, taken after unprotected sex to prevent unwanted pregnancies.',
  },
  {
    id: 3,
    title: 'Alternative Contraceptives  ',
    description:
      'Commonly referred to as ‘The Pill’, women’s oral contraceptive tablets are effective at preventing pregnancy when taken once a day.',
  },
  {
    id: 4,
    title: 'Period Delay ',
    description:
      'You can successfully delay the beginning of your period to better fit with your lifestyle and to avoid your period causing you any inconvenience.',
  },
]
const SubCategory = () => {
  return (
    <Wrapper className='section'>
      <div className='title__wrapper'>
        <h2 className='title'>
          Women's <span className='subtitle'>Health</span>
        </h2>
      </div>
      <section className='section__center center'>
        {data.map((card) => {
          const { id, title, description } = card
          return (
            <article className='card' key={id}>
              <div className='heading'>
                <a href='#' className='link'>
                  {title}
                </a>
              </div>
              <div className='desc'>
                <p>{description}</p>
              </div>
              <div className='btnC'>
                <span className='product'>View Product</span>
              </div>
            </article>
          )
        })}
      </section>
    </Wrapper>
  )
}

export default SubCategory
const Wrapper = styled.section`
  .card {
    background-color: var(--white);
    padding: 40px;
    margin-bottom: 20px;
    border: 1px solid #d8e5e8;
  }
  .desc {
    color: var(--darkpara);
  }

  .product {
    overflow: hidden;
    width: 100%;
    line-height: 28px;
    height: 28px;
    display: inline-block;
    font-size: 13px;
    text-transform: uppercase;
    padding-right: 55px;
    position: relative;
    margin-top: 1px;
    font-weight: 700;
    color: #1375b8;
    letter-spacing: 0.5px;
    opacity: 1;
    /* transform: translateX(100%); */
    /* transform: translateX(50px); */
  }
  .product::after {
    content: '';
    background: transparent
      url(data:image/svg+xml,%3Csvg%20fill%3D%22%23144b86%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20141%2075.859%22%3E%3Ctitle%3Earrow-right%3C%2Ftitle%3E%3Cpath%20d%3D%22M140.121%2C35.809%2C105.191.879a3%2C3%2C0%2C0%2C0-4.242%2C4.242L130.757%2C34.93H3a3%2C3%2C0%2C0%2C0%2C0%2C6H130.757L100.949%2C70.738a3%2C3%2C0%2C1%2C0%2C4.242%2C4.242l34.93-34.93A3%2C3%2C0%2C0%2C0%2C140.121%2C35.809Z%22%2F%3E%3C%2Fsvg%3E)
      no-repeat 50% 50%;
    background-size: 100%;
    width: 14159px;
    height: 75px;
    width: 45px;
    height: 28px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
    -moz-transform: scale(0.75);
    -ms-transform: scale(0.75);
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
  .btnC {
    opacity: 1;

    float: right;
    letter-spacing: 0.5px;
    text-align: right;
    /* display: inline-block; */
    overflow: hidden;
    /* position: absolute; */
    bottom: 20px;
    right: 30px;
  }
  .link {
    font-size: 1.375rem;
    color: var(--darkHeading);
  }
  @media screen and (min-width: 768px) {
    .center {
      display: grid;
      justify-content: center;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 2rem;
    }
  }
  @media screen and (min-width: 1170px) {
    .center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 2rem;

      justify-content: center;
    }
  }
`
