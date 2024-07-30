import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

export const Wrapper = styled.ScrollView`
    margin-top: ${hp("10%")}px;
    padding: ${wp("5%")}px;
    display: flex;
    flex-direction: column;
`;

export const RegistrationView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
`;

export const InputLabel = styled.Text`
  font-size: 15px;
  color: #6F7A70;
  padding-bottom: ${hp("1%")}px;
  font-family: ${theme.fonts.interMedium};
  padding-left: ${wp("9%")}px;
  width:100%;
  margin-top:20px;
`;

export const ColorSelect = styled.TouchableOpacity<{color:string}>`
    background-color: ${({color}) => color};
    border-radius: ${wp("100%")}px;
    width: ${wp("10%")}px;
    height: ${wp("10%")}px;
  `

export const SelectorWrapper = styled.View`
margin-top: ${hp("1%")}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const Random = styled.View`
  display: flex;
  height: ${hp("10%")}px;`