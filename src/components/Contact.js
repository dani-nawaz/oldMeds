import React from 'react'
import styled from 'styled-components'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import TelegramIcon from '@material-ui/icons/Telegram'
import RingVolumeIcon from '@material-ui/icons/RingVolume'

export const Contact = () => {
  return (
    <Wrapper className='section '>
      {/* <div className='title__wrapper'>
        <h2 className='title'>
          How can we help you <span className='subtitle'>today?</span>
        </h2>
      </div> */}
      <div className='section__center contact__center '>
        <div className='helpText'>
          <h3>Here to help you</h3>
          <p>
            Our Customer Service is available Monday to Friday 9am - 4pm. If you
            need urgent assistance, do not use this service. Call{' '}
            <span>111</span>,or in an emergency call <span>999.</span>
            <span> Visit our help section</span>
          </p>
        </div>
        <div className='helps'>
          <div className='text__align'>
            {' '}
            <LiveHelpIcon />
            <h4> Live Chat</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='text__align'>
            {' '}
            <TelegramIcon />
            <h4> Email </h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='text__align'>
            {' '}
            <RingVolumeIcon />
            <h4> 011 590 700</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  /* background-image: url('https://www.pngitem.com/pimgs/m/91-916154_contact-us-hd-png-download.png'); */
  background-image: url('https://www.flow-seo.com/wp-content/uploads/2021/03/Contact_4-1.jpeg');
  background-image: url('https://www.ceoemaildata.com/img/contact-info.png');
  background-position: top left;
  background-repeat: no-repeat;
  background-size: auto;
  .contact__center {
    display: grid;
    grid-template-columns: 1fr 1fr;

    grid-column-gap: 4rem;
    align-items: center;
  }
  @media screen and (min-width: 400px) {
    .contact__center {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (min-width: 1170px) {
    .contact__center {
      grid-template-columns: 1fr 1fr;
    }
  }

  h3 {
    color: var(--darkHeading);
  }
  span {
    color: #ef4565;
    font-weight: 700;
  }
  span:hover {
    /* font-weight: 800; */
    text-decoration: underline;
  }
  .contact__center h4 {
    color: var(--darkHeading);
  }
  .contact__center svg {
    font-size: 4rem;
    line-height: 1;
    color: var(--darkHeading);
  }
  .helps {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
  }
`
