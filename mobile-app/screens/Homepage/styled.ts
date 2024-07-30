import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

export const ReservationTitle = styled.Text`
    font-family: ${theme.fonts.interSemiBold};
    font-size: ${wp("7%")}px;
    color: ${theme.palette.white};
`;

export const ReservationName = styled.Text`
    font-family: ${theme.fonts.interSemiBold};
    font-size: ${wp("6%")}px;
    color: ${theme.palette.white};
`;

export const ReservationAddress = styled.Text`
    font-family: ${theme.fonts.interSemiBold};
    font-size: ${wp("4%")}px;
    color: ${theme.palette.white};
`;

export const HeadWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const ModalWrapper = styled.View`
    padding: ${wp("5%")}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${wp("5%")}px;
`;

export const InfoText = styled.Text`
    text-align: center;
    padding-left : ${wp("5%")}px;
    padding-right : ${wp("5%")}px;
    font-family: ${theme.fonts.interMedium};
    font-size: ${wp("5%")}px;
    color: ${theme.palette.white};
`;
export const ButtonWrapper = styled.View`
    height: ${hp("7%")}px;
`;