import React from "react";
import { ReactComponent as SunnySVG } from "../assets/sunny.svg";
import * as styles from "./styled-components/Styles";

const Card = () => {
  return (
    <>
      <styles.CardWrapper>
        <styles.CardHeader>
          <styles.CountryInput></styles.CountryInput>
          <styles.CountryHour>15:00</styles.CountryHour>
        </styles.CardHeader>
        <styles.CardIconContainer>
          <styles.SvgContainer>
            <SunnySVG></SunnySVG>
          </styles.SvgContainer>
          <p>Sunny</p>
        </styles.CardIconContainer>
        <styles.CardFooter>
          <styles.PropertiesContainer></styles.PropertiesContainer>
          <styles.TemperatureContainer></styles.TemperatureContainer>
        </styles.CardFooter>
      </styles.CardWrapper>
    </>
  );
};

export default Card;
