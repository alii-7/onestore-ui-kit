import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/styles';
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({

})

const AddresesListItem = ({address}) => {
    const classes = useStyles()
    return (
        <ListItem
            className={classes.root}
            button
            component="a"
            alignItems="flex-start"
            divider={true}
        >
            <ListItemText
                primary={
                    <Typography
                        noWrap={false}
                        component="p"
                        variant="body1"
                        className={classes.text}
                        color="textPrimary"
                    >
                        {address.title}
                    </Typography>
                }
                secondary={
                    <Typography
                        noWrap={false}
                        component="p"
                        variant="body2"
                        color="textSecondary"
                        className={classes.text}
                        style={{
                            fontSize: " 12px",
                            fontWeight: "300",
                            lineHeight: " 1.67",
                            letterSpacing: "normal",
                            color: "#999999"
                        }}
                    >
                        {address.address}
                    </Typography>
                }
            />
        </ListItem>
    )
}

export default AddresesListItem