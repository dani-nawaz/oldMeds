import Divider from '@material-ui/core/Divider'

import React, { useState } from 'react'
import styled from 'styled-components'

const ProdductImages = ({ images }) => {
  const [main, setMain] = useState(images[0])
  console.log(main)
  return (
    <Wrapper>
      <img src={main.url} alt='main' className='main' />

      <hr />

      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              onClick={() => {
                setMain(images[index])
              }}
              alt=''
              className={`${image.url === main.url ? 'active' : null}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

export default ProdductImages
const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--borderRadius);
    object-fit: cover;
  }
  hr {
    color: var(--darkpara);
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--darkHeading);
  }
`
