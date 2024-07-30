import React, { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { RootDrawerScreenProps } from "../../navigation/root-navigator";
import { Input, Logo, StickyHeader } from "../../components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as S from "./styled";
import { Pinpoint } from "../../components";
import { OccupancyPrediction } from "../../components/OccupancyPrediction/OccupancyPrediction";
import { MainButton } from "../../components/MainButton/MainButton";
import Mapbox from "@rnmapbox/maps";
import { getCluster } from "../../helpers/getCluster";
import { openMaps } from "../../helpers/openMaps";
import { useSecureStore } from "../../hooks/useStorage";
import { ScrollView } from "react-native-gesture-handler";
import { Modal } from "../../components/Modal/Modal";
import axios from "axios";
import { api } from "../../helpers/const";

const ClusterDetailsScreen: FC<RootDrawerScreenProps<"ClusterDetails">> = ({
  route,
}) => {
  const { id } = route.params;
  const [cluster, setCluster] = React.useState<any>({});
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState([0, 0]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const [day, setDay] = React.useState<string>("Sunday");

  const { save, get } = useSecureStore();

  useEffect(() => {
    const getData = async () => {
      const token = await get("token");

      const data = await getCluster(id, token);

      setCluster(data[0]);
    };
    getData();
  }, [id]);

    

  const handleAddToFavorites = async () => {
    const newFavorite = {
      id: id,
      name: cluster.name,
      address: cluster.address,
    };

    const favorites = await get("favorites");

    const oldFavorites = JSON.parse(favorites);

    if (oldFavorites) {
      const newFavorites = [...oldFavorites, newFavorite];
      await save("favorites", JSON.stringify(newFavorites));
      return;
    } else {
      await save("favorites", JSON.stringify([newFavorite]));
    }
  };

  const handleReserve = async () => {
    await save("reservation", JSON.stringify({name: cluster.name, address: cluster.address, time: time}));

    try {
      const token = await get("token");
      const response = await axios.post(
        `${api}/parking-spots/reserve`,
        {
          _id: id,
          h: Number(time[0]),
          m: Number(time[1]),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    hideDatePicker();
  };

  const hasAvailableSpaces = cluster?.numOfAvailableSpots > 0;
  const pinPointColor = hasAvailableSpaces ? "#53D160" : "#D15353";

  return (
    <View style={styles.container}>
      {isDatePickerVisible && (
        <Modal>
          <Input
            onChangeText={(text) => {
              setTime([text, time[1]]);
            }}
            placeholder="hours"
          />
          <Input
            onChangeText={(text) => {
              setTime([time[0], text]);
            }}
            placeholder="minutes"
          />
          <MainButton
            label="Reserve"
            handlePress={() => {
              handleReserve();
            }}
          />
        </Modal>
      )}
      <ScrollView>
        <StickyHeader>
          <View style={{ ...styles.stickyHeaderContent, marginTop: hp("2%") }}>
            <Logo />
          </View>
        </StickyHeader>

        <S.Wrapper>
          <S.TopWrapper>
            <Pinpoint color={pinPointColor} width="48" height="52" />
            <S.TextWrapper>
              <S.TopText>{cluster?.name}</S.TopText>
              <S.BottomText>{cluster?.address?.split(",")[0]}</S.BottomText>
              <S.BottomText>120m from your location</S.BottomText>
              <S.BottomText available={cluster?.available} showColor>
                {cluster?.numOfAvailableSpots} spots left
              </S.BottomText>
            </S.TextWrapper>
          </S.TopWrapper>
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
          >
            <Mapbox.Camera
              zoomLevel={12}
              centerCoordinate={[
                cluster?.longitude ?? 0,
                cluster?.latitude ?? 0,
              ]}
              animationMode="flyTo"
              animationDuration={2000}
              allowUpdates={true}
            />

            <Mapbox.UserLocation />

            <Mapbox.PointAnnotation
              id="marker"
              coordinate={[cluster?.longitude ?? 0, cluster?.latitude ?? 0]}
            >
              <Pinpoint color={"blue"} />
            </Mapbox.PointAnnotation>
          </Mapbox.MapView>

          <S.MainButtonWrapper>
            <MainButton
              label="Directions"
              handlePress={() => {
                openMaps(cluster?.latitude, cluster?.longitude, cluster?.name);
              }}
            />
            <MainButton
              label="Favorite"
              primary={false}
              handlePress={handleAddToFavorites}
            />
          </S.MainButtonWrapper>
          {hasAvailableSpaces && (
            <S.SecondMainButtonWrapper>
              <MainButton
                label="Reserve"
                handlePress={() => {
                  showDatePicker();
                }}
              />
            </S.SecondMainButtonWrapper>
          )}
          <S.SectionTitle>Occupancy prediction</S.SectionTitle>
          <S.SelectorWrapper>
            <S.StyledButton
              onPress={() => {
                setDay("Monday");
              }}
              selected={day == "Monday"}
            >
              <S.ButtonText selected={day == "Monday"}>Mon</S.ButtonText>
            </S.StyledButton>

            <S.StyledButton
              onPress={() => {
                setDay("Tuesday");
              }}
              selected={day == "Tuesday"}
            >
              <S.ButtonText selected={day == "Tuesday"}>Tue</S.ButtonText>
            </S.StyledButton>

            <S.StyledButton
              onPress={() => {
                setDay("Wednesday");
              }}
              selected={day == "Wednesday"}
            >
              <S.ButtonText selected={day == "Wednesday"}>Wed</S.ButtonText>
            </S.StyledButton>

            <S.StyledButton
              onPress={() => {
                setDay("Thursday");
              }}
              selected={day == "Thursday"}
            >
              <S.ButtonText selected={day == "Thursday"}>Thu</S.ButtonText>
            </S.StyledButton>

            <S.StyledButton
              onPress={() => {
                setDay("Friday");
              }}
              selected={day == "Friday"}
            >
              <S.ButtonText selected={day == "Friday"}>Fri</S.ButtonText>
            </S.StyledButton>

            <S.StyledButton
              onPress={() => {
                setDay("Saturday");
              }}
              selected={day == "Saturday"}
            >
              <S.ButtonText selected={day == "Saturday"}>Sat</S.ButtonText>
            </S.StyledButton>

            <S.StyledButton
              onPress={() => {
                setDay("Sunday");
              }}
              selected={day == "Sunday"}
            >
              <S.ButtonText selected={day == "Sunday"}>Sun</S.ButtonText>
            </S.StyledButton>
          </S.SelectorWrapper>
          <OccupancyPrediction />
        </S.Wrapper>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    zIndex: 2900,
    width: "100%",
    height: 200,
    borderRadius: 80,
  },
  container: {
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

export default ClusterDetailsScreen;
