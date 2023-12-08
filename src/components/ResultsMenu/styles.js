import styled from "styled-components";
import {ClickableText} from "../../styles";

export const ResultsListContainer = styled.div`
  height: 100%;
  padding: 16px;
  background: white;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.1);
  display: flex;
  flex-flow: column;
  width: 550px;
  
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const SearchClickableText = styled(ClickableText)`
  font-weight: bold;
  margin-left: 8px;
`;

export const ResultsAmount = styled.span`
  color: #e86324;
  font-weight: bold;
`;