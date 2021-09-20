import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  grey: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: 'var(--darkpara)',
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}))

export default function LetterAvatars({ name }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Avatar className={classes.grey}>{name}</Avatar>
    </div>
  )
}
