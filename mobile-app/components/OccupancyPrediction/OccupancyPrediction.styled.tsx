import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

type ButtonProps = {
  isDisabled?: boolean;
};

export const BarWrapper = styled.View`
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.69px;
  border-bottom-color:#3E463F;
  border-bottom-width: 1px;
  margin-bottom: 2px;
`;

export const Bar = styled.View<{now?: boolean, percentage: number}>`
  background-color : ${props => {
    if (props.now) {
      return "#3871E0";
    }
    else if(props.percentage < 90) {
      return "rgba(83, 209, 96, 0.7)";
    }
    else {
      return "rgba(240, 128, 128, 0.7)";
    }
   }
  };
  height: ${props => props.percentage}%;
  flex:1;
  border-top-left-radius: 2.35px;
  border-top-right-radius: 2.35px;
`;

export const HourText = styled.Text`
  font-family: ${theme.fonts.interRegular};
  font-size: ${wp("2.5%")}px;
  color: #3E463F;
`;  

export const HoursWrapper = styled.View` 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.69px;
`;
