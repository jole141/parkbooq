import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export const DropdownContainer = styled.View`
  position: relative;
  width: 100%;
  z-index: 100;
`;

export const DropdownButton = styled.TouchableOpacity(
  ({ theme }) => css`
    padding: ${hp("1%")}px ${wp("4%")}px;
    background-color: ${theme.colors.background.secondary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `
);

export const DropdownBackground = styled.View(
  ({ theme }) => css`
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: ${width}px;
    height: ${height}px;
  `
);

export const DropdownOptionsContainer = styled.View(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.background.quaternary};
    margin-top: ${hp("1%")}px;
  `
);

export const DropdownOption = styled.TouchableOpacity`
  padding: ${hp("1%")}px ${wp("4%")}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.background.primary};
`;

export const DropdownButtonText = styled.Text(
  ({ theme }) => css`
    font-size: ${hp("2%")}px;
    color: ${theme.colors.foreground.secondary};
  `
);

export const DropdownOptionText = styled.Text(
  ({ theme }) => css`
    font-size: ${hp("2%")}px;
    color: ${theme.colors.foreground.secondary};
  `
);

export const DropdownLabel = styled.Text(
  ({ theme }) => css`
    font-size: ${hp("2%")}px;
    color: ${theme.colors.foreground.secondary};
    padding-bottom: ${hp("1%")}px;
    font-weight: bold;
  `
);

export const DropdownIcon = styled(MaterialIcons)`
  font-size: ${hp("3%")}px;
  color: ${({ theme }) => theme.colors.foreground.primary};
`;
