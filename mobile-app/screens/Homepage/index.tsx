import React, { FC, useCallback, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { RootDrawerScreenProps } from "../../navigation/root-navigator";
import Mapbox from "@rnmapbox/maps";
import * as Location from "expo-location";
import {
  BottomNavigation,
  ClusterSelector,
  InfoComponent,
  Input,
  Logo,
  Pinpoint,
  SearchIcon,
  StickyHeader,
} from "../../components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BottomNavigationEnum } from "../../helpers/const";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

Mapbox.setAccessToken(
  "sk.eyJ1IjoiZGRyemFpYyIsImEiOiJjbG9qdnk0YWcyNXdwMmtvMjFzNWoyYWZpIn0.kWjM-b9vjLseJM3nz-_qIg"
);

import * as S from "./styled";
import { MainButton } from "../../components/MainButton/MainButton";
import { getAllClusters } from "../../helpers/getAllClusters";
import { useSecureStore } from "../../hooks/useStorage";

const HomeScreen: FC<RootDrawerScreenProps<"Home">> = () => {
  const navigation = useNavigation();

  const [location, setLocation] = React.useState({
    latitude: 45.81,
    longitude: 15.96,
  });

  const [clusters, setClusters] = React.useState([]);

  const [zoom, setZoom] = React.useState<number>(0);

  Mapbox.requestAndroidLocationPermissions();

  Mapbox.setTelemetryEnabled(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude ?? 0,
        longitude: currentLocation.coords.longitude ?? 0,
      });

      const data = await getAllClusters();
      setClusters(data);
    })();
  }, []);

  const generatePointAnnotations = useCallback(() => {
    return clusters?.map((item: any, index) => {
      const shouldRender =
        (zoom > 12 && index % 9 === 0) ||
        (zoom > 13 && index % 7 === 0) ||
        (zoom > 14 && index % 5 === 0) ||
        (zoom > 15 && index % 3 === 0) ||
        (zoom > 16 && index % 2 === 0) ||
        zoom > 17 ||
        (zoom < 12 && index % 14 === 0);

      if (!shouldRender) return null;

      return (
        <Mapbox.PointAnnotation
          onSelected={() => {
            navigation.navigate(BottomNavigationEnum.CLUSTERDETAILS, {
              id: item._id,
            });
          }}
          key={index.toString()}
          id={index.toString()}
          coordinate={[item.longitude, item.latitude]}
        >
          <Pinpoint
            color={item.available ? "#53D160" : "#D15353"}
            width="27.8"
            height="32.2"
          />
        </Mapbox.PointAnnotation>
      );
    });
  }, [clusters, zoom]);

  const modalItem = (item: any, index: number) => (
    <ClusterSelector
      key={index}
      handlePress={() => {
        navigation.navigate(BottomNavigationEnum.CLUSTERDETAILS, {
          id: item._id,
        });
      }}
      name={item.name}
      address={item.address.split(",")[0]}
      distance={item.distance}
      hasAvailableSpaces={item.available}
      light
    />
  );

  const {get} = useSecureStore();


  const [reservation, setReservation] = React.useState(undefined);

  const isFocused = useIsFocused();

  useEffect (() => {
    const readsData = async () => {
      const data = await get("reservation");
      setReservation(JSON.parse(data));
    }
    readsData();
  }
  ,[isFocused]);


  const generateModalData = () => {
    if (reservation) {
      return (
        <S.ModalWrapper>
          <S.ReservationTitle>Reservation</S.ReservationTitle>
          <S.HeadWrapper>
            <Pinpoint
              color={true ? "#D15353" : "#53D160"}
              width="27.8"
              height="32.2"
            />
            <View>
              <S.ReservationName>{reservation?.name}</S.ReservationName>
              <S.ReservationAddress>
                {reservation?.address?.split(",")[0]}
              </S.ReservationAddress>
            </View>
          </S.HeadWrapper>

          <S.InfoText>
            Your reservation expires at {reservation?.time && reservation?.time[0]}:{reservation?.time && reservation?.time[1]}
          </S.InfoText>
          <S.ButtonWrapper>
            <MainButton primary={false} label="Directions" onPress={() => {}} />
          </S.ButtonWrapper>
        </S.ModalWrapper>
      );
    } else {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          {clusters?.map((item, index) => {
            return modalItem(item, index);
          })}
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.container}>
      <StickyHeader>
        <View style={{ ...styles.stickyHeaderContent, marginTop: hp("2%") }}>
          <Logo />
        </View>
      </StickyHeader>

      <BottomNavigation
        active={BottomNavigationEnum.MAP}
        onChange={(e) => {
          navigation.navigate(e);
        }}
        drawerContent={generateModalData()}
      />
      <Mapbox.MapView
        style={styles.map}
        styleURL={Mapbox.StyleURL.Street}
        scaleBarEnabled={false}
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}
        zoomEnabled={true}
        scrollEnabled={true}
        pitchEnabled={true}
        interactive={true}
        onCameraChanged={(e) => {
          setZoom(e.properties.zoom);
        }}
      >
        <Mapbox.Camera
          zoomLevel={11}
          centerCoordinate={[
            location?.longitude ?? 15.96,
            location?.latitude ?? 45.81,
          ]}
          animationMode="flyTo"
          animationDuration={2000}
          allowUpdates={true}
        />

        <Mapbox.UserLocation />

        {generatePointAnnotations()}
      </Mapbox.MapView>
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

export default HomeScreen;
