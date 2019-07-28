import React from 'react'
import { makeStyles, createStyles } from "@material-ui/styles"
import Menu from "@material-ui/core/Menu"
import Button from "@material-ui/core/Button"
import NavigationList from './NavigationList'

const useStyles = makeStyles(theme => ({
    paper: {
        width: '290px',
        borderRadius: '8px',
        boxShadow: '0 3px 10px 0 rgba(84, 84, 84, 0.15)',
        border: 'solid 2px #eae8e7',
        backgroundColor: 'ffffff',
    },
    padding: {
        padding: "0px"
    }
}))

const NavigationMenu = props => {
    const classes = useStyles(props);

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <Button
                aria-controls="customized-notification-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Open Notification Menu
            </Button>
            <Menu
                classes={{ paper: classes.paper, list: classes.padding }}
                id="customized-notification-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                {...props}
            >
                <NavigationList />
                {/* {props.allnotifications.length ? (<NotificationItemList allnotifications={props.allnotifications} />) : (
                    <p> No notification </p>
                )} */}
            </Menu>
        </React.Fragment>
    );
}

export default NavigationMenu