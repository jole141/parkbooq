import React, { forwardRef } from "react";
import * as S from "./ButtonSelector.styled";

export interface ButtonProps {
  label: string;
  onPress: () => void;
  isDisabled?: boolean;
  className?: string;
  style?: any;
  onLayout?: (event: any) => void;
}

export const ButtonSelector = forwardRef(
  (
    { label, onPress, isDisabled, className, style, onLayout }: ButtonProps,
    ref
  ) => {
    const handlePress = () => {
      if (!isDisabled) {
        onPress();
      }
    };

    return (
      <S.Button
        onPress={handlePress}
        activeOpacity={isDisabled ? 1 : 0.6}
        onLayout={onLayout}
      >
        <S.ButtonText >{label}</S.ButtonText>
      </S.Button>
    );
  }
);
