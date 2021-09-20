// import React from 'react'
// import styled from 'styled-components'

// const ReviewCard = ({ card }) => {
//   const { name, reviews, star, id } = card
//   console.log(reviews)
//   return (
//     <Wrapper className='reviews'>
//       <div>
//         <div className='text'>
//           <p>{reviews}</p>
//         </div>
//         <footer>
//           <div className='img'>
//             <img
//               src='https://nextcare.com/wp-content/uploads/2020/08/google-icon.png'
//               alt='Margaret West'
//             />
//           </div>
//           <div className='name'>
//             <h4>{name}</h4>
//           </div>
//         </footer>
//       </div>
//     </Wrapper>
//   )
// }

// export default ReviewCard
// const Wrapper = styled.section`
//   background-color: var(--blue);

//   .reviews::before {
//     content: ' ';
//     position: absolute;
//     top: 30px;
//     left: 30px;
//     background: url('https://image.flaticon.com/icons/png/512/792/792101.png')
//       center center no-repeat;
//     background-size: auto;
//     width: 36px;
//     height: 26px;
//   }
//   .img {
//     flex-shrink: 0;
//     display: block;
//   }
//   .img img {
//     width: 30px;
//     height: 30px;
//     border: none;
//     display: block;
//     /* border-radius: 50px; */
//   }
//   footer {
//     margin-top: 30px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//   }
//   h4 {
//     color: var(--darkHeading);

//     margin-left: -10rem;
//     font-weight: 500;
//     line-height: 16px;
//   }
//   .text {
//     min-height: 168px;
//     line-height: 24px;
//     /* font-size: 16px; */
//   }
//   div {
//     /* height: 500px; */
//     border-radius: 10px;
//     position: relative;
//     padding: 76px 30px 30px 30px;
//     text-align: left;
//     background-color: var(--clr-grey-10);
//     margin-bottom: 4rem;
//     display: flex;
//     flex-direction: column;
//     /* justify-content: space-between; */
//     /* align-content: space-between; */
//   }
// `
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'

const useStyles = makeStyles({
  root: {
    padding: '76px 30px 30px 30px',
    borderRadius: '10px',
    textAlign: 'left',
    minWidth: 275,
    color: '#fffffe',
    position: 'relative',
    backgroundColor: '#094067',
    // marginBottom: '2rem',
    backgroundColor: 'var(--white)',
  },

  title: {
    fontWeight: '500',
    lineHeight: '16px',
    color: ' var(--darkHeading)',
  },
  para: {
    fontSize: '17px',

    fontStyle: 'normal',
    minHeight: '168px',
    lineHeight: '24px',
    color: 'var(--darkpara)',
    // marginBottom: '1rem',
  },
  span: {
    position: 'relative',
    top: '-89px',
    right: '-30px',
    transform: 'rotateY(180deg)',
  },
})

// styles for the image is in the index css
export default function ReviewCard({ card }) {
  const { name, star, reviews, time } = card
  const classes = useStyles()
  console.log(card)
  return (
    <Card className={classes.root}>
      <span className={classes.span}>
        <FormatQuoteIcon />
      </span>
      <CardContent>
        <Typography variant='body2' className={classes.para} component='p'>
          {reviews}
        </Typography>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}
        >
          <div className='googleImgContainer'>
            <img
              style={{
                width: ' 30px',
                height: '30px',
                border: 'none',
              }}
              src='https://nextcare.com/wp-content/uploads/2020/08/google-icon.png'
              alt='Margaret West'
            />
          </div>
          <div className='name' style={{ marginLeft: '10px' }}>
            <Typography className={classes.title} variant='h5' component='h2'>
              {name}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
