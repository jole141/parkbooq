import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";
import { ButtonSelector } from "../../components";

export const Wrapper = styled.View`
  margin-top: ${hp("10%")}px;
  padding: ${wp("5%")}px;
  flex: 1;
`;

export const TopText = styled.Text`
  font-size: ${hp("3.5%")}px;
  color: #3e463f;
  font-family: ${theme.fonts.interSemiBold};
`;

export const BottomText = styled.Text<{
  available?: boolean;
  showColor?: boolean;
}>`
  font-size: 17px;
  color: ${(props) =>
    props.showColor ? (props.available ? "#53D160" : "#D15353") : "#3E463F"};
  font-family: ${theme.fonts.interMedium};
`;

export const TextWrapper = styled.View`
  display: flex;
  align-items: left;
  flex-direction: column;
`;

export const TopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 20px;
  color: #3e463f;
  font-family: ${theme.fonts.interSemiBold};
  margin-top: 20px;
`;

export const SelectorWrapper = styled.View`
  margin-top: ${hp("1%")}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const MainButtonWrapper = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`;

export const SecondMainButtonWrapper = styled.View`
  margin-top: ${hp("1%")}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
`;

export const StyledButton = styled.TouchableOpacity<{ selected?: boolean }>`
  background-color: ${(props) =>
    props.selected ? theme.palette.primary : theme.palette.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${wp("2%")}px;
  flex: 1;
  height: ${wp("8%")}px;
  border: 2px solid ${theme.palette.primary};
`;

export const ButtonText = styled.Text<{ selected?: boolean }>`
  color: ${(props) => (props.selected ? "#fff" : theme.palette.primary)};
  font-family: ${theme.fonts.interMedium};
  font-size: 15px;
`;
