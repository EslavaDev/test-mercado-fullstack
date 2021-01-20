import React from 'react';
import { TextAtom } from '../../atoms/text-atom';
import { TextBadgetItemsDetail } from './styled';

interface Props {
  badget: string;
  productName: string;
  price: string;
  children: React.ReactNode;
}
export const ItemInformationPrice = ({
  badget,
  price,
  productName,
  children,
}: Props) => {
  return (
    <>
      <div className="items-buyed">
        <TextBadgetItemsDetail fontWeight="normal" fontSize={14}>
          {badget}
        </TextBadgetItemsDetail>
      </div>
      <TextAtom fontWeight={700} fontSize={24}>
        {productName}
      </TextAtom>
      <div className="price">
        <TextAtom fontWeight="normal" fontSize={35}>
          {price}
        </TextAtom>
      </div>
      {children}
    </>
  );
};
