import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from "@material-ui/styles";
import CancelImage from "../../generic/images/cancel-circle.png";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(
  createStyles({
    select: {
      textAlign: "left",
      width: "300px",
      fontFamily: "Montserrat",
      fontSize: "15px",
      fontWeight: "600",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1.33",
      letterSpacing: "normal",
      paddingLeft: "8px",
      borderRadius: "5px",
      border: "2px solid rgb(234,232,231)",
      backgroundColor: "rgb(255,255,255,1)",
      color: "#545454",
      disableUnderline: true,
      "&:focus": {
        backgroundColor: "rgb(255,255,255,1)"
      }
    },
    disabled: {
      border: "2px solid  #f7f7f7",
      color: "#d8d8d8"
    },
    focused: {
      border: "2px solid  #1b6af9",
      background: "rgb(255,255,255,1)",
      backgroundColor: "rgb(255,255,255,1)",
      color: "#545454"
    },
    input: {
      backgroundColor: "rgb(255,255,255,1)",
      fonFamily: "Montserrat",
      fontSize: "15px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1.33",
      letterSpacing: "normal",
      border: "none"
    },
    disabledOnlyItem: {},
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120
    },
    shrink: {
      color: "#545454"
    }
  })
);

const DropDownField = props => {
  const classes = useStyles();
  const isOnlyItem =
    props.children.length === 1 ? classes.disabledOnlyItem : classes.disabled;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel
        shrink={true}
        focused={false}
        classes={{ shrink: classes.shrink }}
        htmlFor="age-simple"
      >
        {props.label}
      </InputLabel>
      <Select
        displayEmpty={false}
        renderValue={value => {
          return `${value}`;
        }}
        inputProps={{
          name: "age",
          id: "age-simple"
        }}
        disabled={props.disabled || props.children.length === 1}
        classes={{ select: classes.select }}
        className={classes.select}
        input={
          <Input
            classes={{
              focused: classes.focused,
              disabled: isOnlyItem,
              input: classes.input
            }}
          />
        }
        disableUnderline={true}
        displayEmpty={true}
        {...props}
      />
    </FormControl>
  );
};

export default DropDownField;
