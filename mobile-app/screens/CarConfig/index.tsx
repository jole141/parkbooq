import React, { FC, useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { RootDrawerScreenProps } from "../../navigation/root-navigator";
import {
  BottomNavigation,
  Input,
  Logo,
  StickyHeader,
  Cars,
  Button,
  LicensePlate,
  ButtonSelector,
} from "../../components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BottomNavigationEnum } from "../../helpers/const";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styled";
import { Text } from "react-native";
import { MainButton } from "../../components/MainButton/MainButton";
import { addCar } from "../../helpers/addCar";
import { useSecureStore } from "../../hooks/useStorage";

const CarConfigScreen: FC<RootDrawerScreenProps<"Profile">> = () => {
  // add function to change screen to home screen
  const navigation = useNavigation();

  const { save, get } = useSecureStore();

  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const getToken = async () => {
      const token = await get("token");
      setToken(token);
    };
    getToken();
  }, []);

  const handleAddCar = async () => {
    const info = await addCar(
      make,
      model,
      city,
      number,
      text,
      color,
      type,
      token
    );
    if (info)
      navigation.navigate(BottomNavigationEnum.PROFILE, {
        reset: true,
      });
  };

  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [city, setCity] = useState<string>("ZG");
  const [number, setNumber] = useState<string>("111");
  const [text, setText] = useState<string>("AA");
  const [color, setColor] = useState<string>("blue");
  const [type, setType] = useState<string>("sedan");

  const elevation = 2;

  return (
    <View style={styles.container}>
      <StickyHeader>
        <View style={{ ...styles.stickyHeaderContent, marginTop: hp("2%") }}>
          <Logo />
        </View>
      </StickyHeader>

      <S.Wrapper
        contentContainerStyle={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Cars type={type} color={color} />
        <LicensePlate city={city} number={number} text={text} />
        <Input
          onChangeText={(e) => {
            setMake(e);
          }}
          label="Make"
          placeholder="Toyota"
          value={make}
        />
        <Input
          onChangeText={(e) => {
            setModel(e);
          }}
          label="Model"
          placeholder="Camry"
          value={model}
        />
        <S.InputLabel>License</S.InputLabel>
        <S.RegistrationView>
          <Input
            onChangeText={(e) => {
              setCity(e.toUpperCase());
            }}
            placeholder="ZG"
            usePx
            width={"90"}
            maxLength={2}
            removeMargin
          />
          <Input
            onChangeText={(e) => {
              setNumber(e.toUpperCase());
            }}
            placeholder="111"
            usePx
            width={"100"}
            maxLength={4}
            removeMargin
          />
          <Input
            onChangeText={(e) => {
              setText(e.toUpperCase());
            }}
            placeholder="AA"
            usePx
            width={"90"}
            maxLength={2}
            removeMargin
          />
        </S.RegistrationView>
        <S.InputLabel>Car color</S.InputLabel>
        <S.SelectorWrapper>
          <S.ColorSelect
            color="#EB1926"
            onPress={() => {
              setColor("red");
            }}
            style={{ elevation: elevation }}
          />
          <S.ColorSelect
            color="#4319EB"
            onPress={() => {
              setColor("blue");
            }}
            style={{ elevation: elevation }}
          />
          <S.ColorSelect
            color="#2AEB19"
            onPress={() => {
              setColor("green");
            }}
            style={{ elevation: elevation }}
          />
          <S.ColorSelect
            color="#EBCA19"
            onPress={() => {
              setColor("yellow");
            }}
            style={{ elevation: elevation }}
          />
          <S.ColorSelect
            color="#000000"
            onPress={() => {
              setColor("black");
            }}
            style={{ elevation: elevation }}
          />
          <S.ColorSelect
            color="#ffffff"
            onPress={() => {
              setColor("white");
            }}
            style={{ elevation: elevation }}
          />
        </S.SelectorWrapper>
        <S.InputLabel>Car type</S.InputLabel>
        <S.SelectorWrapper>
          <ButtonSelector
            label="Sedan"
            onPress={() => {
              setType("sedan");
            }}
          />
          <ButtonSelector
            label="Coupe"
            onPress={() => {
              setType("coupe");
            }}
          />
          <ButtonSelector
            label="SUV"
            onPress={() => {
              setType("suv");
            }}
          />
        </S.SelectorWrapper>
        <View
          style={{ height: hp("7%"), marginTop: hp("3%"), width: hp("30%") }}
        >
          <MainButton
            label="Save"
            handlePress={() => {
              handleAddCar();
            }}
          />
        </View>
        <S.Random />
      </S.Wrapper>

      {/* <BottomNavigation active={BottomNavigationEnum.PROFILE} onChange={(e) => {navigation.navigate(e)}} /> */}
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
    flex: 1,
  },
  stickyHeaderContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: wp("2%"),
  },
});

export default CarConfigScreen;
