import React, { useRef } from "react";
import * as S from "./InfoComponent.styled";
import { Animated, Easing, Touchable } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type InfoComponentProps = {
  content: React.ReactNode;
};

export const InfoComponent = ({ content }: InfoComponentProps) => {
  const animatedHeight = React.useRef(new Animated.Value(0));

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const onOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  React.useEffect(() => {
    if (isDrawerOpen) {
      Animated.timing(animatedHeight.current, {
        toValue: hp("60%"),
        duration: 350,
        // Accelerate then decelerate - https://cubic-bezier.com/#.28,0,.63,1
        easing: Easing.bezier(0.28, 0, 0.63, 1),
        useNativeDriver: false, // 'bottom' is not supported by native animated module
      }).start();
    } else {
      Animated.timing(animatedHeight.current, {
        toValue: 0,
        duration: 250,
        // Accelerate - https://easings.net/#easeInCubic
        easing: Easing.cubic,
        useNativeDriver: false,
      }).start();
    }
  }, [isDrawerOpen]);

  return (
    <>
      <Animated.View
        style={{
          height: animatedHeight.current,
          position: "absolute",
          bottom: hp("10%"),
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "rgba(56, 113, 224, 0.7)",
          marginHorizontal: hp("4%"),
          borderRadius: hp("5%"),
          marginBottom: hp("4%"),
        }}
      >
        {content && (
          <S.DrawerHandleBackground onPressIn={onOpen}>
            <S.DrawerHandle />
          </S.DrawerHandleBackground>
        )}
        <S.Container>{content}</S.Container>
      </Animated.View>
    </>
  );
};
