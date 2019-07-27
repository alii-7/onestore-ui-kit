import React from 'react'
import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/styles'
import BaseButton from './BaseButton'

const useStyles = makeStyles(
    createStyles({
        secondary: {
            fontFamily: 'Montserrat',
            fontSize: '15px',
            fontWeight: '600',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: '1.33',
            letterSpacing: 'normal',
            boxShadow: 'none',
            backgroundColor: '#eae8e7',
            color: '#67696a',
            borderRadius: '25px',
            textTransform: "none",
            '&:disabled': {
                backgroundColor: '#f7f7f7',
                color: '#d8d8d8',
            },
            '&:hover': {
                backgroundColor: '#f7f7f7',
            },
            '&:focus': {
                backgroundColor: 'rgb(216,216,216)',
            }
        },
    })
)

const PrimaryButton = (props) => {
    const classes = useStyles();
    return (
        <BaseButton {...props} className={classes.secondary} />
    )
}

export default PrimaryButton
