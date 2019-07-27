import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";

function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${color} transparent`
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${color} transparent transparent transparent`
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.95em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${color} transparent transparent`
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.95em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${color}`
      }
    }
  };
}

const useStyles = makeStyles(
  createStyles({
    shrink: {
      color: "#545454"
    },
    input: {
      fontFamily: "Montserrat",
      fontSize: "15px",
      fontWeight: "600",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1.33",
      letterSpacing: "normal",
      paddingLeft: "13px",
      borderRadius: "5px",
      border: "2px solid rgb(234,232,231)",
      backgroundColor: "rgb(255,255,255)",
      disableUnderline: "true",
      "&:focus": {
        border: "2px solid rgb(27,106,249)",
        fonFamily: "Montserrat",
        fontSize: "15px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.33",
        letterSpacing: "normal",
        color: "rgb(84,84,84)"
      },
      "&:not(:focus)": {
        fonFamily: "Montserrat",
        fontSize: "15px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.33",
        letterSpacing: "normal",
        color: "rgb(84,84,84)"
      },
      "&:invalid": {
        border: "2px solid rgb(183,28,28)"
      }
    },
    tooltip: {
      position: "relative",
      backgroundColor: "rgb(183,28,28)"
    },
    arrow: {
      position: "absolute",
      fontSize: 8,
      width: "3em",
      height: "3em",
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: 0,
        height: 0,
        borderStyle: "solid"
      }
    },
    popper: arrowGenerator("rgb(183,28,28)"),
  })
);

const FormField = props => {
  console.log(props)
  const { arrow, input, shrink, ...classes } = useStyles();
  const { title, ...others } = props;
  // console.log("classes", ...classes)
  const [arrowRef, setArrowRef] = React.useState(null);

  // const classes = useStyles()
  console.log("eorr", props.error);
  return (
    <Tooltip
      placement="top-start"
      open={props.error}
      disableTouchListener
      disableFocusListener
      disableHoverListener
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef
            }
          }
        }
      }}
      classes={classes}
      {...others}
      title={
        <React.Fragment>
          {props.errortext}
          <span className={arrow} ref={arrowRef} />
        </React.Fragment>
      }
    >
      <TextField
        InputLabelProps={{
          shrink: true,
          focused: false,
          classes: { shrink: classes.shrink }
        }}
        InputProps={{
          classes: { input: input },
          disableUnderline: true
        }}
        {...others}
      />
    </Tooltip>
  );
};

FormField.defaultProps = {
  errortext: "Wrong Format"
};

FormField.propTypes = {
  errortext: PropTypes.node
};

export default FormField;
