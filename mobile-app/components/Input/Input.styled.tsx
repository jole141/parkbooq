import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

export const InputWrapper = styled.View<{ removeMargin?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: ${({ removeMargin }) => (removeMargin ? "0" : "20")}px;
`;

export const InputLabel = styled.Text`
  font-size: 15px;
  color: #6f7a70;
  padding-bottom: ${hp("1%")}px;
  font-family: ${theme.fonts.interMedium};
  padding-left: ${wp("5%")}px;
`;

export const InputContainer = styled.View<{ width?: string; usePx?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${hp("2%")}px;
  border: 1px solid #6f7a70;
  overflow: hidden;
  background-color: ${theme.palette.background};
  width: ${({ width }) => width ?? "90"}${({ usePx }) => (usePx ? "px" : "%")};
`;

export const InputError = styled.Text(
  ({}) => css`
    font-size: ${hp("1.5%")}px;
    color: ${theme.palette.danger};
    padding-top: ${hp("1%")}px;
  `
);

export const InputField = styled.TextInput.attrs(({}) => ({
  placeholderTextColor: "#BBBBBB",
  cursorColor: "#BBBBBB",
}))(
  ({}) => css`
    padding: ${hp("1.5%")}px ${wp("7%")}px;
    color: #6f7a70;
    font-size: 17px;
    width: 100%;
    font-family: ${theme.fonts.interMedium};
  `
);
