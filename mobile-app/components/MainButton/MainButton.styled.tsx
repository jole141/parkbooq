import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";


export const Button = styled.TouchableOpacity<{primary? : boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${wp("3%")}px;
    flex:1;
    background-color: ${props => props.primary ? theme.palette.primary : theme.palette.white};
    padding: ${wp("2%")}px;
    border: 2px solid ${theme.palette.primary};

    
  `


export const ButtonText = styled.Text<{primary? : boolean}>`
    color: ${props => props.primary ? theme.palette.white : theme.palette.primary};
    font-family: ${theme.fonts.interMedium};
    font-size: ${wp("5%")}px;
  `
