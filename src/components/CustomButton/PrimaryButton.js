import React from 'react'
import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/styles'
import BaseButton from './BaseButton'

const useStyles = makeStyles(
    createStyles({
        primary: {
            fontFamily: 'Montserrat',
            fontSize: '15px',
            fontWeight: '600',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: '1.33',
            letterSpacing: 'normal',
            boxShadow: 'none',
            backgroundColor: 'rgb(27,106,249, 0.9)',
            color: 'rgb(255,255,255)',
            borderRadius: '25px',
            textTransform: "none",
            '&:disabled': {
                backgroundColor: 'rgb(27,106,249, 0.3)',
                color: 'rgb(255,255,255)',
            },
            '&:hover': {
                backgroundColor: 'rgb(27,106,249, 0.7)',
            },
            '&:focus': {
                backgroundColor: 'rgb(27,106,249, 1)',
            }
        }
    })
)

const PrimaryButton = (props) => {
    const classes = useStyles();
    return (
        <BaseButton {...props} className={classes.primary} />
    )
}

export default PrimaryButton
