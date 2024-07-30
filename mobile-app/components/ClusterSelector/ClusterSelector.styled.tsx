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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-left: ${wp("4%")}px;
  padding-right: ${wp("4%")}px;
`;

export const ContentWrapper = styled.TouchableOpacity<{light?: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: ${wp("2%")}px;
  width: 100%;
  padding-top: ${wp("4%")}px;
  padding-bottom: ${wp("4%")}px;
  border-bottom-color:${props => props.light ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}; ;
  border-bottom-width: 1px;
`;

export const TextWrapper = styled.View`
  display: flex;
  align-items: left;
  flex-direction: column;
`;

export const TopText = styled.Text<{light?: boolean}>`
  color: ${props => props.light ? '#FFFFFF' : '#3e463f'};
  font-family: ${theme.fonts.interSemiBold};
  font-size: 20px;
`;

export const BottomText = styled.Text<{light?: boolean}>`
  color: ${props => props.light ? '#FFFFFF' : '#3e463f'};
  font-family: ${theme.fonts.interSemiBold};
  font-size: 14px;
`;

export const LeftWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;