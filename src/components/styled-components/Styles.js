
import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 30vw;
  height: 50vh;
  place-self: center;
  margin: auto auto;
  background-image: linear-gradient(45deg, #030303, #282626);
  border-radius: 3%;
  border: #333333 1px solid;
`;

export const CardHeader = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CountryInput = styled.input`
  background-color: #201f20;
  border: #333333 2px solid;
  border-radius: 10%;
  width: 20%;
  height: 30%;
  color: #ececec;
  margin-left: 10%;
  align-self: center;
  font-family: inherit;
  font-size: 1.2vw;
  text-align: center;
  transition: linear 0.3s;
  :focus {
    outline: none;
    width: 40%;
  }
`;

export const CountryHour = styled.p`
  font-size: 1.7vw;
  color: #ececec;
  align-self: center;
  margin-right: 10%;
`;

export const CardIconContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    color: #949494;
    text-align: center;
    font-size: 1.4vw;
    line-height: 0;
  }
`;

export const SvgContainer = styled.div`
  width: 60%;
  height: 60%;
  margin: auto auto 0 auto;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CardFooter = styled.div`
  height: 35%;
  width: 100%;
  border: #333333 1px solid;
  display: flex;
`;

export const PropertiesContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const TemperatureContainer = styled.div`
  width: 50%;
  height: 100%;
`;