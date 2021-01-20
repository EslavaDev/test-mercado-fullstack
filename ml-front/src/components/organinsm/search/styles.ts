import styled from 'styled-components';

export const InputSearch = styled.input`
  background-color: white;
  border-color: transparent;
  height: 100%;
  width: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 18 px;
  padding-left: 15px;
  padding-right: 15px;
  overflow-x: auto;
  &:focus {
    outline: none;
  }
  @media (max-width: 769px) {
    font-size: 10px;
  }
`;
