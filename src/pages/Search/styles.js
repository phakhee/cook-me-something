import styled, {keyframes} from "styled-components";
import {Row} from "../../styles";

export const SearchContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  user-select: none;
  
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const SiteName = styled.p`
  font-family: Cooking, serif;
  font-size: 100px;
  text-align: center;
  color: #e86324;

  @media only screen and (max-width: 768px) {
    font-size: 64px;
  }
`;

export const ForkKnife = styled.img`
  margin-left: 16px;
  transition: 1s;
  
  &:hover {
    transform: translateY(-30px);
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SiteDescription = styled.p`
  font-family: Anko, serif;
  font-size: 24px;
  text-align: center;

  margin-bottom: 32px;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const InputRow = styled(Row)`
  margin-bottom: 32px;
  
  @media only screen and (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: ${props => props.width};
  padding: 16px;
  border: 0.5px solid lightgray;
  border-radius: 25px;

  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 0 16px;

  @media only screen and (max-width: 768px) {
    margin: 16px 0 0 0;
  }
`;

export const ChangeAmountButton = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #e86324;
  border-radius: 50%;
  padding: 8px;
  color: white;
  font-size: 20px;
  margin: 0 8px;
  user-select: none;

  &:hover {
    filter: brightness(90%);
  }
  
  span {
    transform: translateY(-3px);
  }
`;

const ZoomInAndOut = keyframes`
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0);
  }
`;

export const LoadingIndicator = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  
  animation-name: ${ZoomInAndOut};
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
`;