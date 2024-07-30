import styled from "styled-components/native";

export const SliderWrapper = styled.FlatList<{ height: number }>`
  margin-top: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  height: 300px;
  max-height: ${({ height }) => (height ? height : 500)}px;
  width: 100%;
  overflow: visible;
`;
