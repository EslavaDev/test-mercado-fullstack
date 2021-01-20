import styled from 'styled-components';

export const ContainerTextCategoryFather = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MajorTextCategory = styled.span`
  margin: 0px 10px;
  color: ${({ theme }) => theme.colors.LIGTH_GRAY};
  font-size: 14px;
`;
export const ContentTextCategory = styled.p<{ isLast?: boolean }>`
  color: ${({ theme }) => theme.colors.LIGTH_GRAY};
  font-size: 14px;
  ${({ isLast }) => isLast && `font-weight: 700;`}
`;
