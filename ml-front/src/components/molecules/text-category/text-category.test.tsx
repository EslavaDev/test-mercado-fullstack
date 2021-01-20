import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TextCategory } from '.';
import { TestingMock } from '../../../helpers/testing-mock';

afterEach(cleanup);

describe('TextCategory', () => {
  it('works', () => {
    const mockData = {
      isLast: false,
      text: 'mockData',
    };
    const { container } = render(
      <TestingMock>
        <TextCategory {...mockData} />
      </TestingMock>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('isLast is true', () => {
    const mockData = {
      isLast: false,
      text: 'mockData',
    };
    const { getByText } = render(
      <TestingMock>
        <TextCategory {...mockData} />
      </TestingMock>,
    );
    expect(getByText(/>/)).toBeInTheDocument();
    expect(getByText(/mockData/)).toBeInTheDocument();
  });
  it('isLast is false', () => {
    const mockData = {
      isLast: true,
      text: 'mockData',
    };
    const { getByText } = render(
      <TestingMock>
        <TextCategory {...mockData} />
      </TestingMock>,
    );
    expect(getByText(/mockData/)).toBeInTheDocument();
  });
});
