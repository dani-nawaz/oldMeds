import React, { useState } from 'react'
import styled from 'styled-components'
import CheckIcon from '@material-ui/icons/Check'

// import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {
  const { id, stock, strenghts, PackageSizes } = product

  // const [mainColor, setMainColor] = useState(colors[0])
  const [strenght, setStrenght] = useState(strenghts[0])
  const [packageSize, setpackageSize] = useState(PackageSizes[0])
  console.log(PackageSizes[0])
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }

  return (
    <Wrapper>
      <div className='colors'>
        <span> Strenght : </span>
        <div>
          {strenghts.map((strenghted, index) => {
            return (
              <button
                key={index}
                className={`${
                  strenght === strenghted
                    ? 'color-btn  btn active'
                    : 'color-btn btn'
                }`}
                onClick={() => setStrenght(strenghted)}
              >
                {strenght === strenghted ? <CheckIcon /> : null}
                {strenghted}
              </button>
            )
          })}
        </div>
        <span> Strenght : </span>
        <div>
          {PackageSizes.map((size, index) => {
            return (
              <button
                key={index}
                className={`${
                  packageSize === size
                    ? 'color-btn  btn active'
                    : 'color-btn btn'
                }`}
                onClick={() => setpackageSize(size)}
              >
                {packageSize === size ? <CheckIcon /> : null}
                {size}
              </button>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      margin-top: 1rem;
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    border-radius: var(--borderRadius);
    /* background: #222; */
    margin-right: 0.5rem;
    color: var(--darkHeading);
    border: 2px solid var(--darkHeading);
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    svg {
      font-size: 1rem;
      color: var(--white);
      display: inline-block;
      /* margin-left: 1rem; */
    }
  }
  .active {
    opacity: 1;
    background-color: var(--darkHeading);
    color: var(--white);
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    /* width: 140px; */
  }
`
export default AddToCart
