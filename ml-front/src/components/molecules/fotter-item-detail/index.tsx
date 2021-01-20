import React from 'react';
import { TextAtom } from '../../atoms/text-atom';

interface Props {
  content: string;
  title: string;
}
export const FooterItemDetail = ({ content, title }: Props) => {
  return (
    <>
      <TextAtom fontWeight={700} fontSize={28}>
        {title}
      </TextAtom>
      <div className="description">
        <TextAtom fontWeight="normal" fontSize={16}>
          {content}
        </TextAtom>
      </div>
    </>
  );
};
