import React from 'react'
import { makeStyles, createStyles } from "@material-ui/styles";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import AddresesListItem from './AddresesListItem'

const useStyles = makeStyles({
    paper: {
        width: '265px',
        borderRadius: '8px',
        boxShadow: '0 3px 10px 0 rgba(84, 84, 84, 0.15)',
        border: 'solid 2px #eae8e7',
        backgroundColor: '#ffffff',
    },
      padding: {
        padding: "0px"
      }
})

const AddressesMenu = props => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        console.log("this is the event.target", event.currentTarget)
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <Button
                aria-controls="customized-Addreses-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Open Addreses Menu
            </Button>
            <Menu
                classes={{ paper: classes.paper, list: classes.padding }}
                id="customized-Addreses-menu"
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
                {
                    props.addresses.map((address,index) => {
                        return <AddresesListItem key={index} address={address}/>
                    })
                }
            </Menu>
        </React.Fragment>
    );
}

export default AddressesMenu