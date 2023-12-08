import styled from "styled-components";
import {Row} from "../../styles";

export const AllResultsContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  overflow-y: auto;
  display: flex;
  flex-flow: column;

  @media only screen and (min-width: 769px) {
    flex-wrap: wrap;
    flex-flow: wrap;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #e86324;
    border-radius: 5px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #d05116;
  }
`;

export const ResultCard = styled.div`
  width: calc(50% - 16px);
  min-height: 200px;
  height: 200px;
  
  padding: 16px;
  margin: 8px 8px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.1);
  transition: 0.2s;
  cursor: pointer;
  user-select: none;
  
  display: flex;
  flex-flow: column;
  
  &:hover {
    transform: scale(1.01);
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.2);
  }

  @media only screen and (max-width: 768px) {
    width: calc(100% - 16px);
    max-height: 150px;
  }
`;

export const RecipeName = styled.p`
  font-weight: bold;
  font-size: 24px;
  max-height: 212px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RecipeCardRow = styled(Row)`
  margin-top: auto;
  margin-bottom: 0;
  
  img {
    height: 25px;
    width: 25px;
    margin-right: 8px;
  }
`;