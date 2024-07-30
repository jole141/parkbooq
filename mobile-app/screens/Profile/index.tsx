import React, { FC, useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { RootDrawerScreenProps } from "../../navigation/root-navigator";
import {
  BottomNavigation,
  Input,
  Logo,
  StickyHeader,
  Cars,
  Button,
  CardsSlider,
  LicensePlate,
} from "../../components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BottomNavigationEnum, api } from "../../helpers/const";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import * as S from "./styled";
import axios from "axios";
import { useSecureStore } from "../../hooks/useStorage";

const ProfileScreen: FC<RootDrawerScreenProps<"Profile">> = () => {
  // add function to change screen to home screen
  const navigation = useNavigation();
  const [user, setUser] = React.useState(null);
  const { get } = useSecureStore();

  const isFocused = useIsFocused();

  useEffect(() => {
    const getUser = async () => {
      const token = await get("token");
      const res = await axios.get(`${api}/auth/whoAmI`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(res.data);
    };
    getUser();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <StickyHeader>
        <View style={{ ...styles.stickyHeaderContent, marginTop: hp("2%") }}>
          <Logo />
        </View>
      </StickyHeader>

      <S.Wrapper>
        <S.Wallet
          source={require("../../assets/gradient.png")}
          imageStyle={{ borderRadius: 27 }}
        >
          <S.WalletWrapper>
            <S.WalletTextHead>Wallet</S.WalletTextHead>
            <S.WalletTextSubhead>{user?.balance.toFixed(0)} €</S.WalletTextSubhead>
          </S.WalletWrapper>
        </S.Wallet>
        <CardsSlider
          cards={[
            ...(user?.cars?.map((car) => (
              <View>
                <Cars type={car.type} color={car.color} />
                <S.TextWrapper>
                <LicensePlate city={car.city} number={car.numbers} text={car.text} />
                <S.StyledText>{car.make} {car.model}</S.StyledText>
                </S.TextWrapper>
              </View>
            )) ?? []),
            <Button
              label="+"
              onPress={() => {
                navigation.navigate(BottomNavigationEnum.CARCONFIG);
              }}
              style={{
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginBottom: hp("10%"),
                marginHorizontal: wp("15%"),
              }}
            />,
          ]}
        />
      </S.Wrapper>

      <BottomNavigation
        active={BottomNavigationEnum.PROFILE}
        onChange={(e) => {
          navigation.navigate(e);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
  },
  stickyHeaderContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: wp("2%"),
  },
});

export default ProfileScreen;
