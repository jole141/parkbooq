import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Wrapper = styled.View`
  margin-top: ${hp("10%")}px;
  padding: ${wp("5%")}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledView = styled.View`
margin-top: ${hp("5%")}px;
  display: flex;
  align-items: center;
  height: ${hp("8%")}px;
`;