import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const TextArea = props => {
  const useStyles = makeStyles(
    createStyles({
      root: {
        width: "400px",
        padding: "15px,15px",
        borderRadius: "5px",
        border: "solid 2px #eae8e7",
        backgroundColor: "#ffffff",
        color: "#adaba5",
        "&:not(:focus)": {
          color: "#545454"
        },
      },
      focused: {
        color: "#545454",
        border: "solid 2px #1b6af9"
      },
      disabled: {
        color: "#d8d8d8",
        border: "solid 2px #f7f7f7"
      },
      input: {
        paddingLeft: "12px",
        border: "none",
        width: "400px"
      },
      shrink: {
        color: '#545454',
      }
    })
  );

  const classes = useStyles(props);
  return (
    <TextField
      label="Label"
      InputLabelProps={{
          shrink:true,
          focused:false,
        classes: { shrink:classes.shrink },
      }}
      multiline
      rows="3"
      InputProps={{
        classes: {
          root: classes.root,
          disabled: classes.disabled,
          input: classes.input,
          focused: classes.focused
        },
        disableUnderline: true
      }}
      {...props}
    />
  );
};

export default TextArea;
