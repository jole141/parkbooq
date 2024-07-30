import React, { forwardRef } from "react";
import { Pinpoint } from "../Pinpoint/Pinpoint";
import * as S from "./ClusterSelector.styled";

export interface ButtonProps {
  name: string;
  address: string;
  distance: string;
  hasAvailableSpaces: boolean;
  handlePress: () => void;
  light?: boolean;
}

export const ClusterSelector = forwardRef(
  (
    {
      name,
      address,
      distance,
      hasAvailableSpaces,
      handlePress,
      light,
    }: ButtonProps,
    ref
  ) => {
    return (
      <S.Wrapper>
        <S.ContentWrapper onPress={handlePress} light={light}>
          <S.LeftWrapper>
            <Pinpoint
              color={hasAvailableSpaces ? "#D15353" : "#53D160"}
              width="27.8"
              height="32.2"
            />
            <S.TextWrapper>
              <S.TopText light={light}>{name}</S.TopText>
              <S.BottomText light={light}>{address}</S.BottomText>
            </S.TextWrapper>
          </S.LeftWrapper>
          <S.TopText light={light}>{distance}</S.TopText>
        </S.ContentWrapper>
      </S.Wrapper>
    );
  }
);
