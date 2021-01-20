import React from 'react';
import './styles.css';

interface Props {
  color: string;
  value: string;
}

export const BadgeCircle = ({ color, value }: Props) => {
  return (
    <div className="headquarter-content-item">
      <span
        className="headquarter-content-item-circle"
        style={{ backgroundColor: color }}
      />
      <p>{value}</p>
    </div>
  );
};
