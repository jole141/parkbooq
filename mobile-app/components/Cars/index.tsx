import React, { forwardRef } from "react";
import * as S from "./styled";
import { View } from "react-native";

export interface CarsProps {
  type: string;
  color: string;
}

export const Cars = forwardRef(({ type, color }: CarsProps, ref) => {

    const getCarImage = (type: string, color: string) => {
        if (type == "coupe" && color == "black") {
            return <S.CoverImage source={require("../../assets/cars/coupe/black.png")} />
        }
        else if (type == "coupe" && color == "blue") {
            return <S.CoverImage source={require("../../assets/cars/coupe/blue.png")} />
        }
        else if (type == "coupe" && color == "green") {
            return <S.CoverImage source={require("../../assets/cars/coupe/green.png")} />
        }
        else if (type == "coupe" && color == "red") {
            return <S.CoverImage source={require("../../assets/cars/coupe/red.png")} />
        }
        else if (type == "coupe" && color == "white") {
            return <S.CoverImage source={require("../../assets/cars/coupe/white.png")} />
        }
        else if (type == "coupe" && color == "yellow") {
            return <S.CoverImage source={require("../../assets/cars/coupe/yellow.png")} />
        }
        else if (type == "sedan" && color == "black") {
            return <S.CoverImage source={require("../../assets/cars/sedan/black.png")} />
        }
        else if (type == "sedan" && color == "blue") {
            return <S.CoverImage source={require("../../assets/cars/sedan/blue.png")} />
        }
        else if (type == "sedan" && color == "green") {
            return <S.CoverImage source={require("../../assets/cars/sedan/green.png")} />
        }
        else if (type == "sedan" && color == "red") {
            return <S.CoverImage source={require("../../assets/cars/sedan/red.png")} />
        }
        else if (type == "sedan" && color == "white") {
            return <S.CoverImage source={require("../../assets/cars/sedan/white.png")} />
        }
        else if (type == "sedan" && color == "yellow") {
            return <S.CoverImage source={require("../../assets/cars/sedan/yellow.png")} />
        }
        else if (type == "suv" && color == "black") {
            return <S.CoverImage source={require("../../assets/cars/suv/black.png")} />
        }
        else if (type == "suv" && color == "blue") {
            return <S.CoverImage source={require("../../assets/cars/suv/blue.png")} />
        }
        else if (type == "suv" && color == "green") {
            return <S.CoverImage source={require("../../assets/cars/suv/green.png")} />
        }
        else if (type == "suv" && color == "red") {
            return <S.CoverImage source={require("../../assets/cars/suv/red.png")} />
        }
        else if (type == "suv" && color == "white") {
            return <S.CoverImage source={require("../../assets/cars/suv/white.png")} />
        }
        else if (type == "suv" && color == "yellow") {
            return <S.CoverImage source={require("../../assets/cars/suv/yellow.png")} />
        }
    };

    return (
        <S.Wrapper>
            {getCarImage(type, color)}
        </S.Wrapper>
  );
});


export default Cars;
