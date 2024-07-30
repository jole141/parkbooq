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
  ClusterSelector,
} from "../../components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BottomNavigationEnum } from "../../helpers/const";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styled";
import { useSecureStore } from "../../hooks/useStorage";

const FavoritesScreen: FC<RootDrawerScreenProps<"Favorites">> = () => {
  // add function to change screen to home screen
  const navigation = useNavigation();

  const [favs, setFavs] = React.useState<any>([]);

  //mocked data
  // name: string;
  // address: string;
  // distance: string;
  // hasAvailableSpaces: boolean;

  const { save, get } = useSecureStore();
  useEffect(() => {
    const getFavorites = async () => {
      const favorites = await get("favorites");
      setFavs(JSON.parse(favorites));
    };
    getFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <StickyHeader>
        <View style={{ ...styles.stickyHeaderContent, marginTop: hp("2%") }}>
          <Logo />
        </View>
      </StickyHeader>

      <S.Wrapper>
        {favs?.map((favorite, index) => {
          return (
            <ClusterSelector
              handlePress={() => {
                navigation.navigate(BottomNavigationEnum.CLUSTERDETAILS, {
                  id: favorite?.id,
                });
              }}
              key={index}
              name={favorite?.name}
              address={favorite?.address?.split(",")[0]}
              distance={favorite?.distance}
              hasAvailableSpaces={favorite?.hasAvailableSpaces}
              onPress={() => {}}
            />
          );
        })}
      </S.Wrapper>

      <BottomNavigation
        active={BottomNavigationEnum.FAVORITES}
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

export default FavoritesScreen;
