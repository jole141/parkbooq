import { View } from "react-native";
import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type PinpointContainerProps = {
  color: string;
};

export const PinpointContainer = styled(View)<PinpointContainerProps>`
  display: flex;
  width: ${wp("15%")} px;
  height: ${hp("10%")} px;

  background-color: ${(props) => props.color};
  padding: ${wp("1.8%")}px ${wp("2.3%")}px;
  border-radius: ${wp("3%")}px;
`;
