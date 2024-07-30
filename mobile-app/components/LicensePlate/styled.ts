import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";


export const Wrapper = styled.View`
  border-radius: 8px;
  border: 1px solid ${theme.palette.greyish};
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding-right: ${wp("3%")}px;

`;

export const Text = styled.Text`
  color: ${theme.palette.greyish};
  font-size: ${wp("6%")}px;
  font-family: ${theme.fonts.interSemiBold};

`;

export const Box = styled.View`
background-color: #0502B3;
  height: ${wp("10%")}px;
  width: ${wp("7%")}px;
  border-radius: 8px 0 0 8px;
  margin-right: ${wp("2%")}px;
`;

export const Dot = styled.View`
  background-color: #FD0407;
  height: ${wp("2%")}px;
  width: ${wp("2%")}px;
  border-radius: 100px;
    margin-left: ${wp("1%")}px;
    margin-right: ${wp("1%")}px;
`;