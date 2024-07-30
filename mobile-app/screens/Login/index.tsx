import React, { FC, useEffect } from "react";
import {
  ImageBackground,
  Linking,
  Platform,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import { RootDrawerScreenProps } from "../../navigation/root-navigator";
import {
  BottomNavigation,
  Input,
  Logo,
  StickyHeader,
  Cars,
  Button,
  ClusterSelector,
  ButtonSelector,
} from "../../components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styled";
import { MainButton } from "../../components/MainButton/MainButton";
import { login } from "../../helpers/login";
import { useSecureStore } from "../../hooks/useStorage";
import axios from "axios";
import { BottomNavigationEnum, api } from "../../helpers/const";

const LoginScreen: FC<RootDrawerScreenProps<"ClusterDetails">> = ({}) => {
  // add function to change screen to home screen
  const navigation = useNavigation();

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const {save, get} = useSecureStore();


  useEffect(() => {
    const getToken = async () => {
      const token = await get("token");
      if (token) {
        navigation.navigate(BottomNavigationEnum.MAP);
      }
    };
    getToken();
  }
  , []);

  const handleLogin = async () => {

    try {
      const url = `${api}/auth/login`;
      const response = await axios.post(url, {
        username,
        password,
      });
  
  
      await save("token", response.data.token);
      if (response.data.token) {
        navigation.navigate(BottomNavigationEnum.MAP);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <S.Wrapper>
        <Image source={require("../../assets/logo.png")} />
        <Input
          label="Username"
          placeholder="Ivan"
          value={username}
          onChangeText={(e) => setUsername(e)}
        />
        <Input
          label="Password"
          placeholder="*********"
          value={password}
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={true}
        />
        <S.StyledView>
          <MainButton label="Login" handlePress={()=>handleLogin()} />
        </S.StyledView>
      </S.Wrapper>
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

export default LoginScreen;
