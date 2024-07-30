import React, { forwardRef } from "react";
import * as S from "./MainButton.styled";

export interface MainButtonProps {
  label: string;
  handlePress: () => void;
  primary?: boolean;
}

export const MainButton = forwardRef(
  (
    { label, handlePress, primary = true }: MainButtonProps,
    ref
  ) => {

    return (
      <S.Button
        onPress={handlePress}
        primary={primary}
      >
        <S.ButtonText primary={primary}>{label}</S.ButtonText>
      </S.Button>
    );
  }
);
