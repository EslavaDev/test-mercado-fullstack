import React from 'react';
import Search from '../../../assets/ic_Search.png';
import Searchx2 from '../../../assets/ic_Search@2x.png';
import { IconML } from '../../atoms/icon-ml';
import { ContainerButtonSearch } from './styles';

export const ButtonSearch = () => {
  return (
    <ContainerButtonSearch>
      <IconML
        src={Search}
        srcSet={`${Searchx2} 2x`}
        width="18"
        height="18"
        alt="search"
      />
    </ContainerButtonSearch>
  );
};
