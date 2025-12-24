import React from "react";
import Svg, { Path } from "react-native-svg";

const AddItemIcon = ({ size = 28, color = "#6D5DF6" }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={color}
    >
      <Path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </Svg>
  );
};

export default AddItemIcon;
