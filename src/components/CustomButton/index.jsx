import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TertiaryButton from "./TertiaryButton";
import GhostPrimary from "./GhostPrimary";
import GhostSecondary from "./GhostSecondary";
import PropTypes from "prop-types";

const CustomButton = props => {
  switch (props.color) {
    case "primary":
      return <PrimaryButton {...props} />;
    case "secondary":
      return <SecondaryButton {...props} />;
    case "tertiary":
      return <TertiaryButton {...props} />;
    case "ghostPrimary":
      return <GhostPrimary {...props} />;
    case "ghostSecondary":
      return <GhostSecondary {...props} />;
    default:
      return <PrimaryButton {...props} />;
  }
};

CustomButton.defaultProps = {
  color: "primary",
  pos: "left"
};

CustomButton.propTypes = {
  pos: PropTypes.oneOf(["left", "right"]),
  col: PropTypes.oneOf(["primary", "secondary", "tertiary"])
};

export default CustomButton;
