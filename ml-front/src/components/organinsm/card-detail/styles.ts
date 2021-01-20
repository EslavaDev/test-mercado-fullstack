import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { MARGIN_ML, PADDING_ML } from '../../../helpers/constanst';

export const ImageCardItemsCatalog = styled.img`
  border-radius: 4px;
  margin: 0px 0px;
  object-fit: contain;
  @media (max-width: 576px) {
    height: auto;
    width: auto;
  }
`;

export const WrapperItemDetail = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: ${MARGIN_ML}px;
  .buy-button {
    background-color: ${({ theme }) => theme.colors.BLUE};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.WHITE};
    padding: 10px 0px;
    width: 100%;
    border: none;
    margin-right: ${MARGIN_ML}px;
  }
  .items-buyed {
    margin-bottom: ${PADDING_ML}px;
  }
  .price {
    margin: ${MARGIN_ML}px 0px;
  }
  .description {
    padding: ${MARGIN_ML}px 0px;
  }
`;

export const StyledRow = styled(Row)`
  margin: 0px;
  padding: 0;
`;

export const StyledCol = styled(Col)`
  padding: 0;
  margin: 0;
`;

export const ColContentItemsCatalog = styled(Col)`
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
