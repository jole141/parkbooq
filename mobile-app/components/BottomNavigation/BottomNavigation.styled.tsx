import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";
import { TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";

export const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.palette.primary};
  padding: ${hp("1.5%")}px ${wp("1.5%")}px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: ${hp("4%")}px ${wp("8%")}px;
  border-radius: ${hp("100%")}px;
  z-index: 1000;
`;

export const Wrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${wp("1%")}px;
  padding: ${hp("1%")}px ${wp("5%")}px;
  border-radius: ${hp("10%")}px;
  background-color: ${theme.palette.primary};
  z-index: 1000;
  height: ${wp("11%")}px;
  margin: 0 ${wp("1%")}px;
  ${(props) =>
    props.isActive &&
    css`
      background-color: ${theme.palette.secondary};
    `}
`;

export const Text = styled.Text`
  color: ${theme.palette.primary};
  font-size: ${wp("3%")}px;
  font-family: ${theme.fonts.interBold};
`;

export const DrawerHandleBackground = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -${hp("3.5%")}px;
  height: ${hp("12%")}px;
  left: 0;
  right: 0;
  z-index: 0;
  background-color: rgba(56, 113, 224, 0.7);
  padding: ${hp("0.4%")}px ${wp("1.5%")}px;
  border-radius: ${hp("5%")}px;
`;

export const DrawerHandle = styled(View)`
  width: ${wp("12%")}px;
  height: 1px;
  background-color: ${theme.palette.white};
  border-radius: ${hp("100%")}px;
  top: ${hp("1%")}px;
  padding: ${hp("0.5%")}px ${wp("1.5%")}px;
  position: absolute;
`;

export const StyledModalize = styled(Modalize)`
  border-radius: ${hp("5%")}px;
`;
