import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";
import { TouchableOpacity, View } from "react-native";

export const Container = styled(View)`
  padding: ${hp("1%")}px ${wp("1%")}px;
`;

export const DrawerHandleBackground = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -${hp("3%")}px;
  height: ${hp("10%")}px;
  left: 0;
  right: 0;
  background-color: transparent;
  padding: ${hp("2%")}px ${wp("2%")}px;
  border-radius: ${hp("5%")}px;
  z-index: -1;
`;

export const DrawerHandle = styled(View)`
  width: ${wp("17%")}px;
  height: ${hp("1%")}px;
  background-color: ${theme.palette.primary};
  border-radius: ${hp("100%")}px;
  top: ${hp("1%")}px;
  padding: ${hp("0.5%")}px ${wp("1.5%")}px;
  position: absolute;
`;
