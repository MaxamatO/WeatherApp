import React, { useState } from "react";

import {
  CardWrapper,
  CardHeader,
  CountryHour,
  CountryInput,
} from "./styled-components/Styles";
import WeatherInfo from "./WeatherInfo";

const Card = () => {
  const [weatherInfo, setWeatherInfo] = useState({});

  const grabTime = (localtime) => {
    return localtime;
  };

  const callWeatherApi = (cityName) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${"YOUR_API_KEY"}&q=${cityName}`
    )
      .then((res) => res.json())
      .then((data) =>
        setWeatherInfo({
          temp: data.current.temp_c,
          humidity: data.current.humidity,
          windSpeed: data.current.wind_kph,
          time: grabTime(data.location.localtime),
        })
      );
  };

  const handleSearch = (e) => {
    if (e.target.value !== "") callWeatherApi(e.target.value);
  };

  return (
    <>
      <CardWrapper>
        <CardHeader>
          <CountryInput onBlur={(e) => handleSearch(e)}></CountryInput>
          <CountryHour>{weatherInfo.time}</CountryHour>
        </CardHeader>
        <WeatherInfo
          temp={weatherInfo.temp}
          humidity={weatherInfo.humidity}
          windSpeed={weatherInfo.windSpeed}
          mainSVG="Sunny"
        ></WeatherInfo>
      </CardWrapper>
    </>
  );
};

export default Card;
