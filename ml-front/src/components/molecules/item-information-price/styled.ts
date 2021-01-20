import styled from 'styled-components';
import { TextAtom } from '../../atoms/text-atom';

export const TextBadgetItemsDetail = styled(TextAtom)`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.GRAY};
`;
