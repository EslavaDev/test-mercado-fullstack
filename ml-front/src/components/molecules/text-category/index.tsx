import React from 'react';
import {
  ContainerTextCategoryFather,
  ContentTextCategory,
  MajorTextCategory,
} from './styled';

interface Props {
  text: string;
  isLast: boolean;
}
export const TextCategory = ({ isLast, text }: Props) => {
  return (
    <ContainerTextCategoryFather>
      <ContentTextCategory isLast={isLast}>{text}</ContentTextCategory>{' '}
      {!isLast && <MajorTextCategory> {'>'} </MajorTextCategory>}
    </ContainerTextCategoryFather>
  );
};
