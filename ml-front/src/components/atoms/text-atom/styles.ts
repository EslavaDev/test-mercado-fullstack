import styled from 'styled-components';

export const TextAtomStyled = styled.p<{
  fontSize: number;
  fontWeight: FontWeight;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  margin: 0px;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme }) => theme.colors.BLACK};
`;
