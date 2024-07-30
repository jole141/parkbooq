import React, { useRef, useState } from "react";
import * as S from "./CardsSlider.styled";
import { Dimensions } from "react-native";
import Cars from "../Cars";
type CardsSliderProps = {
  cards: JSX.Element[];
  handleEdit?: (index: number) => void;
  handlePress?: (index: number) => void;
  lastItem?: React.ReactNode;
};

export const CardsSlider = ({
  cards,
  handleEdit,
  handlePress,
  lastItem,
}: CardsSliderProps) => {
  const flatList = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const deviceSize = Dimensions.get("window").height;
  const maxCardHeight = deviceSize / 3;
  const hasOneCard = cards.length === 1;

  const cardWidth = hasOneCard
    ? Dimensions.get("window").width - 20
    : Dimensions.get("window").width - 50;

  const handleOnScroll = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / cardWidth);
    setSelectedIndex(index);
  };

  return (
    <S.SliderWrapper
      ref={flatList}
      data={cards}
      renderItem={({ item, index }) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={handleOnScroll}
      disableIntervalMomentum
      decelerationRate="fast"
      snapToAlignment="center"
      pagingEnabled
      height={maxCardHeight + 200}
    />
  );
};
