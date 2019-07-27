import React from "react"
import { makeStyles, createStyles } from "@material-ui/styles"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import ListItemIcon from "@material-ui/core/ListItemIcon"

const useStyles = makeStyles(
  createStyles({
    root: {
      "&:hover": {
        backgroundColor: "#f7f7f7"
      }
    },
    dot: {
      height: "6px",
      width: "6px",
      backgroundColor: "#ff8a88",
      borderRadius: "50%",
      display: "inline-block"
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
    }
  })
);

const CustomNotificationItemList = props => {
  const classes = useStyles();

  return props.allnotifications.map((item, index) => {
    return (
      <ListItem
        key={index}
        className={classes.root}
        button
        component="a"
        alignItems="flex-start"
        divider={true}
      >
        <ListItemIcon style={{ minWidth: "15px", marginTop: "12px" }}>
          <span className={classes.dot} />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              noWrap={false}
              component="p"
              variant="body1"
              className={classes.text}
              color="textPrimary"
            >
              {item.primaryText}
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
              {item.secondaryText}
            </Typography>
          }
        />
      </ListItem>
    );
  });
};

export default CustomNotificationItemList;
