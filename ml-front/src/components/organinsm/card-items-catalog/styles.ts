import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { TextAtom } from '../../atoms/text-atom/index';
import { PADDING_ML } from '../../../helpers/constanst';

export const ImageCardItemsCatalog = styled.img`
  border-radius: 4px;
  margin: 0px ${PADDING_ML}px;
`;

export const ContainerPrincipalCardItemsCatalog = styled(Row)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.WHITE};
  margin: 0px;
  padding: ${PADDING_ML}px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.SNOW};
`;
export const ColImageItemsCatalog = styled(Col)`
  max-width: 13.25em;
`;

export const ColContentItemsCatalog = styled(Col)`
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const TextItemsCatalog = styled(TextAtom)`
  color: ${({ theme }) => theme.colors.GRAY};
`;
export const TextAuthorItemsCatalog = styled(TextAtom)`
  color: ${({ theme }) => theme.colors.LIGTH_GRAY};
`;
