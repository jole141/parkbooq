import React, { forwardRef } from "react";
import { Pinpoint } from "..";
import * as S from "./OccupancyPrediction.styled";
import { View } from "react-native";

export interface OccupancyPredictionProps {}

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const occupancyPredictions = [
  { percentage:  generateRandomNumber(0, 100)},
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100), },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100),now: true },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
  { percentage: generateRandomNumber(0, 100) },
];

export const OccupancyPrediction = forwardRef(
  ({}: OccupancyPredictionProps, ref) => {
    return (
      <View>
        <S.BarWrapper>
          {occupancyPredictions.map((prediction, index) => {
            return (
              <S.Bar
                key={index}
                percentage={prediction.percentage}
                now={prediction.now}
              />
            );
          })}
        </S.BarWrapper>
        <S.HoursWrapper>
          <S.HourText></S.HourText>
          <S.HourText>3</S.HourText>
          <S.HourText>6</S.HourText>
          <S.HourText>9</S.HourText>
          <S.HourText>12</S.HourText>
          <S.HourText>15</S.HourText>
          <S.HourText>18</S.HourText>
          <S.HourText>21</S.HourText>
          <S.HourText></S.HourText>
        </S.HoursWrapper>
      </View>
    );
  }
);
