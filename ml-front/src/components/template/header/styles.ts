import styled from 'styled-components';

export const CustomHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  z-index: 400;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.YELLOW};
`;
export const CustomHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  align-self: stretch;
  & > div {
    height: 100%;
  }
`;
