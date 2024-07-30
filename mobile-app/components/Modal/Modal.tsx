import React from "react";
import { View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import styled from "styled-components";

const ModalBackground = styled(View)`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: #00000040;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
`;

const ModalWrapper = styled(View)`
  background-color: #ffffff;
  height: ${heightPercentageToDP("30%")}px;
  width: ${widthPercentageToDP("80%")}px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  z-index: 100000;
`;

export const Modal = ({ children }) => {
  return (
    <ModalBackground>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalBackground>
  );
};
