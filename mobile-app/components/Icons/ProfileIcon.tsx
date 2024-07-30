import React from "react";
import { Svg, Mask, Circle, G } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type ProfileIconProps = {
  color: string;
};

export const ProfileIcon = ({ color = "white" }: ProfileIconProps) => {
  return (
    <Svg width={wp("6%")} height={hp("7%")} viewBox="0 0 22 23" fill="none">
      <Mask
        id="mask0_32_57"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="22"
        height="23"
      >
        <Circle cx="10.7381" cy="11.5069" r="10.5978" fill="white" />
      </Mask>
      <G mask="url(#mask0_32_57)">
        <Circle
          cx="10.7379"
          cy="11.5067"
          r="9.74867"
          stroke={color}
          stroke-width="1.7"
        />
        <Circle cx="10.7381" cy="9.0954" r="3.31146" fill={color} />
        <Circle cx="10.7381" cy="19.4163" r="5.29568" fill={color} />
      </G>
    </Svg>
  );
};
