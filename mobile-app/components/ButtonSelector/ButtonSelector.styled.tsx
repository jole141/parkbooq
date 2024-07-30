import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

type ButtonProps = {
  isDisabled?: boolean;
};

export const Button = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${wp("2%")}px;
    width: ${wp("20%")}px;
    height: ${wp("10%")}px;
    border: 2px solid ${theme.palette.primary};
  `

export const ButtonText = styled.Text`
    color: ${theme.palette.primary};
    font-family: ${theme.fonts.interMedium};
    font-size: ${wp("4%")}px;
  `
