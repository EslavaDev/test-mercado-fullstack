import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const ContainerLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.SNOW};
  height: 100vh;
  overflow: auto;
`;
export const ContainerLayoutMain = styled.main`
  margin-top: 75px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ColLayoutFather = styled(Col)`
  padding-left: 3vw !important;
  padding-right: 6vw !important;

  @media (max-width: 769px) {
    padding-left: 10vw !important;
  }
  @media (min-width: 1900px) {
    padding-right: 5vw !important;
    padding-left: 3vw !important;
  }
`;
