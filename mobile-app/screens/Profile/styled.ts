import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

export const Wrapper = styled.View`
    margin-top: ${hp("10%")}px;
    padding: ${wp("5%")}px;
`;

export const Wallet = styled.ImageBackground`
    border-radius: 24px;
`;

export const WalletWrapper = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: ${wp("7%")}px;
`;

export const WalletTextHead = styled.Text`
    font-size: ${wp("7%")}px;
    color: ${theme.palette.white};
    font-family: ${theme.fonts.interMedium};
`;

export const WalletTextSubhead = styled.Text`
    font-size: ${wp("15%")}px;
    margin-left: ${wp("5%")}px;
    color: ${theme.palette.white};
    font-family: ${theme.fonts.interSemiBold};
`;

export const TextWrapper = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
`;

export const StyledText = styled.Text`
    font-size: ${wp("5%")}px;
    color: #3E463F;
    font-family: ${theme.fonts.interSemiBold};
`;