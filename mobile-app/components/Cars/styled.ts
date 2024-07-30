import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

type ButtonProps = {
  isDisabled?: boolean;
};

export const Wrapper = styled.View`
   border-radius: 8px;
  aspect-ratio: 1.3;
  height: ${hp("30%")}px;
`;

export const CoverImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;

`;