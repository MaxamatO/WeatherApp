import React from "react";
import { ReactComponent as SunnySVG } from "../assets/sunny.svg";
import { ReactComponent as WindPropSVG } from "../assets/windprop.svg";
import { ReactComponent as HumidityPropSVG } from "../assets/humidityprop.svg";
import {
  CardWrapper,
  CardHeader,
  CardIconContainer,
  CardFooter,
  WindContainer,
  HumidityContainer,
  CountryHour,
  CountryInput,
  PropertiesContainer,
  SvgContainer,
  TemperatureContainer,
  TemperatureP,
  WeatherSignature,
} from "./styled-components/Styles";

const Card = () => {
  return (
    <>
      <CardWrapper>
        <CardHeader>
          <CountryInput></CountryInput>
          <CountryHour>15:00</CountryHour>
        </CardHeader>
        <CardIconContainer>
          <SvgContainer>
            <SunnySVG></SunnySVG>
          </SvgContainer>
          <WeatherSignature>Sunny</WeatherSignature>
        </CardIconContainer>
        <CardFooter>
          <PropertiesContainer>
            <WindContainer>
              <WindPropSVG></WindPropSVG>
              15km/h
            </WindContainer>
            <HumidityContainer>
              <HumidityPropSVG></HumidityPropSVG>
              80%
            </HumidityContainer>
          </PropertiesContainer>
          <TemperatureContainer>
            <TemperatureP>39°</TemperatureP>
          </TemperatureContainer>
        </CardFooter>
      </CardWrapper>
    </>
  );
};

export default Card;
