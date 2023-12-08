import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: ${props => props.verticalAlign ? "center" : "normal"};
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  font-size: ${props => props.size}px;
`;

export const StyledButton = styled.button`
  padding: ${props => props.padding}px;
  border-radius: ${props => props.borderRadius}px;
  border: none;
  background: ${props => props.background};
  color: ${props => props.color};
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    filter: brightness(90%);
  }
`;

export const ClickableText = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    filter: brightness(90%);
  }
`;