import React from "react";
import * as S from "./StickyHeader.styled";

type StickyHeaderProps = {
  children: React.ReactNode;
};

export const StickyHeader = ({ children }: StickyHeaderProps) => {
  return <S.HeaderContainer>{children}</S.HeaderContainer>;
};
