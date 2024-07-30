import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

export const HeaderContainer = styled.View`
  padding: ${hp("2%")}px ${wp("4%")}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 100;
  flex: 1;
`;
