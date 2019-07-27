import React from 'react'
import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/styles'
import BaseButton from './BaseButton'

const useStyles = makeStyles(
    createStyles({
        tertiary: {
            fontFamily: 'Montserrat',
            fontSize: '15px',
            fontWeight: '600',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: '1.33',
            letterSpacing: 'normal',
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            border: 'solid 2px #eae8e7',
            color: '#545454',
            borderRadius: '5px',
            textTransform: "none",
            '&:disabled': {
                backgroundColor: '#ffffff',
                color: '#d8d8d8',
            },
            '&:hover': {
                backgroundColor: '#fafafa',
            },
            '&:focus': {
                backgroundColor: 'rgb(255,255,255)',
            }
        }
    })
)

const PrimaryButton = (props) => {
    const classes = useStyles();
    return (
        <BaseButton {...props} className={classes.tertiary} />
    )
}

export default PrimaryButton
