import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from "@material-ui/core/Typography"
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import  { ReactComponent as CheckBoxEmpty }  from '../../../generic/images/checkboxEmpty.svg'

const useStyles = makeStyles(theme => ({
    listItem: {
        width: '100%',
        maxWidth: '421px',
        height: '35px',
        backgroundColor: 'ffffff'
    },
    itemIcon: {
        minWidth: '12px',
    },
    text: {
        fontFamily: "Montserrat",
        fontSize: "15px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.33",
        letterSpacing: "normal",
        color: "#545454"
    },
    // root: {
    //     "&:hover": {
    //         backgroundColor: "#f7f7f7",
    //         '& .makeStyles-selected-71': {
    //             display: 'none',
    //         },
    //         '& .makeStyles-hovered-72': {
    //             display: 'block',
    //         },
    //     }
    // },
    // selected: {
    //     backgroundColor: '#0ff',
    //     display: 'block',
    // },
    // hovered: {
    //     backgroundColor: '#ff0',
    //     display: 'none'
    // },
}));

const CheckboxListItem = (props) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List disablePadding={true}>
            {props.allchecklist.map((text, index) => {
                const labelId = `checkbox-list-label-${text}`;
                return (
                    <ListItem disabled={text.disabled} classes={{ root: classes.root }} className={classes.listItem} key={index} role={undefined} dense button onClick={handleToggle(text)}>
                        <ListItemIcon className={classes.itemIcon}>
                            <Checkbox
                                // className={classes.selected}
                                color="primary"
                                edge="start"
                                checked={checked.indexOf(text) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            {/* <Checkbox
                                className={classes.hovered}
                                color="secondary"
                                edge="start"
                                checked={checked.indexOf(text) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            /> */}
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={<Typography
                            noWrap={false}
                            component="p"
                            variant="body1"
                            className={classes.text}
                            color="textPrimary"
                        >
                            {text.text}
                        </Typography>} />
                    </ListItem>
                );
            })}
        </List>
    );
}

export default CheckboxListItem