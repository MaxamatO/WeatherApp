import React from "react";
import { ReactComponent as SunnySVG } from "../assets/sunny.svg";
import { ReactComponent as WindPropSVG } from "../assets/windprop.svg";
import { ReactComponent as HumidityPropSVG } from "../assets/humidityprop.svg";
import {
  CardIconContainer,
  CardFooter,
  WindContainer,
  HumidityContainer,
  PropertiesContainer,
  SvgContainer,
  TemperatureContainer,
  TemperatureP,
  WeatherSignature,
} from "./styled-components/Styles";

const components = {
  Sunny: SunnySVG,
};

const WeatherInfo = (props) => {
  const SpecificMainSVG = components[props.mainSVG];
  return (
    <>
      <CardIconContainer>
        <SvgContainer>
          <SpecificMainSVG />
        </SvgContainer>
        <WeatherSignature>{props.mainSVG}</WeatherSignature>
      </CardIconContainer>
      <CardFooter>
        <PropertiesContainer>
          <WindContainer>
            <WindPropSVG />
            {props.windSpeed}
          </WindContainer>
          <HumidityContainer>
            <HumidityPropSVG />
            {props.humidity}
          </HumidityContainer>
        </PropertiesContainer>
        <TemperatureContainer>
          <TemperatureP>{props.temp}°</TemperatureP>
        </TemperatureContainer>
      </CardFooter>
    </>
  );
};

export default WeatherInfo;
