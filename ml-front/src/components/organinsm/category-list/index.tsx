import React from 'react';
import { Row } from 'react-bootstrap';
import { TextCategory } from '../../molecules/text-category';

interface Props {
  categories: Array<string>;
}

export const CategoryList = ({ categories }: Props) => {
  return (
    <Row style={{ marginTop: 16, marginBottom: 16, marginLeft: 0 }}>
      {categories.map((category: string, index: number) => {
        const isLast = index === categories.length - 1;
        return (
          <TextCategory
            key={`${category}-${index + 1}`}
            text={category}
            isLast={isLast}
          />
        );
      })}
    </Row>
  );
};
