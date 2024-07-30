import React, { forwardRef } from "react";
import * as S from "./Button.styled";

export interface ButtonProps {
  label: string;
  onPress: () => void;
  isDisabled?: boolean;
  className?: string;
  style?: any;
  onLayout?: (event: any) => void;
}

export const Button = forwardRef(
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
        isDisabled={isDisabled}
        activeOpacity={isDisabled ? 1 : 0.6}
        onLayout={onLayout}
        style={style}
      >
        <S.ButtonText isDisabled={isDisabled}>{label}</S.ButtonText>
      </S.Button>
    );
  }
);
