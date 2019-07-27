import React from 'react'
import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/styles'
import BaseButton from './BaseButton'

const useStyles = makeStyles(
    createStyles({
        ghost: {
            fontFamily: 'Montserrat',
            fontSize: '15px',
            fontWeight: '600',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: '1.33',
            letterSpacing: 'normal',
            textTransform: "none",
            color: 'rgb(84,84,84)',
            boxShadow: 'none',
            '&:disabled': {
                color: 'rgb(216,216,216)',
            },
            '&:hover': {
                color: 'rgb(153,153,153)',
                backgroundColor: 'rgb(255,255,255)'
            },
            '&:focus': {
                color: 'rgb(4,3,5)',
            }
        }
    })
)

const GhostSecondary = (props) => {
    const classes = useStyles();
    return (
        <BaseButton {...props} className={classes.ghost} />
    )
}

export default GhostSecondary
