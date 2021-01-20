/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { FooterItemDetail } from '../../molecules/fotter-item-detail';
import { ItemInformationPrice } from '../../molecules/item-information-price';

import {
  ImageCardItemsCatalog,
  StyledRow,
  StyledCol,
  WrapperItemDetail,
} from './styles';

export const CardDetail = ({ item }: ItemDetailMercadolibre) => {
  const { picture, price, title, description, condition, sold_quantity } = item;
  return (
    <WrapperItemDetail>
      <StyledRow>
        <StyledCol lg={9} md={9}>
          <ImageCardItemsCatalog width="680" height="680" src={picture} />
        </StyledCol>
        <StyledCol lg={3} md={3}>
          <ItemInformationPrice
            badget={`${condition} - ${sold_quantity} vendidos`}
            productName={title}
            price={Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: price.currency,
            })
              .format(price.amount)
              .toString()}>
            <button className="buy-button" type="button" onClick={() => {}}>
              Comprar
            </button>
          </ItemInformationPrice>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol lg={9} md={9}>
          <FooterItemDetail
            title="Descripción del producto"
            content={description}
          />
        </StyledCol>
        <StyledCol lg={3} md={3} />
      </StyledRow>
    </WrapperItemDetail>
  );
};
