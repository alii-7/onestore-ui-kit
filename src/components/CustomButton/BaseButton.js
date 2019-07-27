import React from 'react'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'

const BaseButton = ({color, ...props}) => (
    <Button
        disableRipple
        {...props}>
        {props.pos === 'left' ?
            <Grid container direction='row' justify="center" alignItems="center" spacing={1}>
                <Grid item>
                    {props.icon}
                </Grid>
                <Grid item>
                    {props.title}
                </Grid>
            </Grid> : (<Grid container direction='row' justify="center" alignItems="center" spacing={1}>
                <Grid item>
                    {props.title}
                </Grid>
                <Grid item>
                    {props.icon}
                </Grid>
            </Grid>)}
    </Button>
)

export default BaseButton
