import React, { useState } from "react";

import {
  CardWrapper,
  CardHeader,
  CountryHour,
  CountryInput,
} from "./styled-components/Styles";
import WeatherInfo from "./WeatherInfo";

const Card = () => {
  const [countryHour, setCountryHour] = useState(null);

  return (
    <>
      <CardWrapper>
        <CardHeader>
          <CountryInput></CountryInput>
          <CountryHour>15:00</CountryHour>
        </CardHeader>
        <WeatherInfo temp="20" mainSVG="Sunny"></WeatherInfo>
      </CardWrapper>
    </>
  );
};

export default Card;
