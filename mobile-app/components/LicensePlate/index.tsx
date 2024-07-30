import React, { forwardRef } from "react";
import * as S from "./styled";
import { View } from "react-native";

export interface LicensePlateProps {
  city: string;
  number: string;
  text: string;
}

export const LicensePlate = forwardRef(({ city, number, text }: LicensePlateProps, ref) => {
  return <S.Wrapper>
    <S.Box/>
    <S.Text>{city}</S.Text><S.Dot/><S.Text>{`${number}-${text}`}</S.Text>
  </S.Wrapper>;
});

export default LicensePlate;
