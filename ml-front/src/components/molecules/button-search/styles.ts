import styled from 'styled-components';

export const ContainerButtonSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${({ theme }) => theme.colors.SNOW};
  @media (max-width: 769px) {
    width: 100%;
  }
`;
