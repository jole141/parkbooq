import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

type ButtonProps = {
  isDisabled?: boolean;
};

export const Button = styled.TouchableOpacity<ButtonProps>(
  ({ isDisabled }) => css`
    background-color: ${isDisabled
      ? theme.palette.background
      : theme.palette.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${wp("5%")}px;
    width: ${wp("20%")}px;
    height: ${wp("20%")}px;
  `
);

export const ButtonText = styled.Text<ButtonProps>(
  ({ isDisabled }) => css`
    color: ${isDisabled ? theme.palette.primary : theme.palette.secondary};
    font-family: ${theme.fonts.interExtraBold};
    font-size: ${wp("11%")}px;
  `
);
