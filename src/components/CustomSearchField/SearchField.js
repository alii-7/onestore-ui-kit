import React from "react";
import Input from "@material-ui/core/Input";
import { makeStyles, createStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CancelImage from "../../generic/images/cancel-circle.png";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#adaba5"
    },
    secondary: {
      main: "#f7f7f7"
    }
  }
});

const useStyles = makeStyles(
  createStyles({
    root: {
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
      backgroundColor: "rgb(255,255,255)",
      color: "#adaba5",
      disableUnderline: true
    },
    disabled: {
      border: "2px solid  #f7f7f7",
      color: "#d8d8d8"
    },
    focused: {
      border: "2px solid  #1b6af9",
      color: "#545454"
    },
    input: {
      fonFamily: "Montserrat",
      fontSize: "15px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1.33",
      letterSpacing: "normal",
      border: "none",
      color: "#545454",
      "&::-webkit-search-cancel-button": {
        position: "relative",
        top: "3px",
        WebkitAppearance: "none",
        height: "25px",
        width: "25px",
        backgroundImage: `url(${CancelImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "20px,20px"
      }
    }
  })
);

const SearchField = props => {
  console.log("propss", props);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Input
        type="search"
        disableUnderline
        className={classes.root}
        classes={{
          input: classes.input,
          disabled: classes.disabled,
          focused: classes.focused
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined color={!props.disabled ? "primary" : "secondary"} />
          </InputAdornment>
        }
        {...props}
      />
    </ThemeProvider>
  );
};

export default SearchField;
