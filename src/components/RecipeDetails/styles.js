import styled from "styled-components";
import {Row} from "../../styles";

export const NoneSelectedText = styled.p`
  margin: auto;
`;

export const RecipeDetailsContainer = styled.div`
  flex: 1;
  background: white;
  margin-left: 8px;
  padding: 0 32px;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.1);
  display: flex;
  flex-flow: column;
  overflow-y: auto;

  @media only screen and (max-width: 768px) {
    flex: none;
    margin: 0;
    box-shadow: none;

    height: 100dvh;
    width: 100vw;
    
    position: absolute;
    left: 0;
    top: 0;
    
    display: ${props => props.open ? "flex" : "none"};
  }
`;

export const RecipeDetailsHeader = styled(Row)`
  margin-top: 32px;
`;

export const RecipeDetailsRow = styled(Row)`
  margin: 8px 0;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CloseButton = styled.p`
  margin-left: auto;
  font-size: 36px;
  cursor: pointer;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const DurationRow = styled(Row)`
  margin: 0 16px 8px 0;
  
  img {
    min-height: 25px;
    min-width: 25px;
    height: 25px;
    width: 25px;
    margin-right: 8px;
  }
`;

export const RecipeSection = styled.div`
  margin: 16px 0;
  display: flex;
  flex-flow: column;
`;

export const RecipeSectionHeader = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const RecipeSteps = styled.div`
  margin-top: 16px;
`;

export const RecipeStep = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
  b {
    margin-right: 8px;
    color: #e86324;
  }
`;