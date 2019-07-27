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
            color: 'rgb(27,106,249,1)',
            textTransform: "none",
            boxShadow: 'none',
            '&:disabled': {
                color: 'rgb(27,106,249,0.3)',
            },
            '&:hover': {
                color: 'rgb(27,106,249,0.7)',
                backgroundColor: 'rgb(255,255,255)'
            },
            '&:focus': {
                color: 'rgb(22,90,211)',
            }
        }
    })
)

const GhostPrimary = (props) => {
    const classes = useStyles();
    return (
        <BaseButton {...props} className={classes.ghost} />
    )
}

export default GhostPrimary
