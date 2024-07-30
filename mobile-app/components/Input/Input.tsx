import React from "react";
import * as S from "./Input.styled";
import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText: (value: string) => void;
  borderRadius?: number;
  width?: string;
  usePx?: boolean;
  maxLength?: number;
  removeMargin?: boolean;
  leftChild?: React.ReactNode;
  secureTextEntry?: boolean;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  width,
  usePx,
  maxLength,
  removeMargin,
  leftChild,
  secureTextEntry = false
}: InputProps) => {
  const handleTextChange = (text: string) => {
    onChangeText(text);
  };

  return (
    <S.InputWrapper removeMargin={removeMargin}>
      {label && <S.InputLabel>{label}</S.InputLabel>}
      <S.InputContainer width={width} usePx={usePx}>
        {leftChild}
        <S.InputField
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}
        />
      </S.InputContainer>
    </S.InputWrapper>
  );
};
