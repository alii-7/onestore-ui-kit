import React from 'react'
import { makeStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ReactComponent as Deconnexion } from "../../../generic/images/deconnexion.svg";

const useStyles = makeStyles(theme => ({
    root: {
        '&:hover': {
            color: '#2e2e2e',
            backgroundColor: '#f7f7f7',
        },
        width: '100%',
        maxWidth: '290px',
        height: '35px',
        minHeight: '35px',
        paddingLeft: '24px',
        backgroundColor: '#ffffff',
        fontFamily: 'Montserrat',
        fontSize: '15px',
        fontWeight: '600',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.33',
        letterSpacing: 'normal',
        color: '#545454',
    },
    lastItem: {
        paddingLeft: '24px',
        width: '100%',
        maxWidth: '290px',
        height: '35px',
        minHeight: '35px',
        backgroundColor: '#eae8e7',
    },
    text: {
    }
}))

const NavigationList = props => {
    const classes = useStyles(props)

    return (
        <MenuList disablePadding={true}>
            <MenuItem className={classes.root}><ListItemText primary={'Mes commandes'} /></MenuItem>
            <MenuItem className={classes.root}><ListItemText primary="Mes impressions" /></MenuItem>
            <MenuItem className={classes.root} divider={true}><ListItemText primary="Mes operations" /></MenuItem>
            <MenuItem className={classes.root}><ListItemText primary="Mon magasin" /></MenuItem>
            <MenuItem className={classes.root}><ListItemText primary="Addresses de livarsion" /></MenuItem>
            <MenuItem className={classes.root}><ListItemText primary="Traceurs et imprimantes" /></MenuItem>
            <MenuItem className={classes.root} divider={true}><ListItemText primary="Budget" /></MenuItem>
            <MenuItem style={{ padding: '25px'}} className={classes.root}><ListItemText primary="Informations de connexion" /></MenuItem>
            <MenuItem className={classes.lastItem}>
                <ListItemIcon style={{ minWidth: '35px' }}>
                    <Deconnexion />
                </ListItemIcon><ListItemText primary="Deconnexion" />
            </MenuItem>
        </MenuList>
    )
}

export default NavigationList