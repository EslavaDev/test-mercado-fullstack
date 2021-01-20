/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setSearchReduxStore } from '../../../store/layout/actions';
import { getLayoutSearch } from '../../../store/layout/selectors';
import { ButtonSearch } from '../../molecules/button-search';
import { InputSearch } from './styles';

export const Search = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchValue = useSelector(getLayoutSearch);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  const redirectPageWithSearch = useCallback(
    async (value) => {
      if (value.length > 0) {
        await history.push({
          pathname: '/items',
          search: `?search=${value}`,
        });
      } else {
        await history.push({
          pathname: '/',
        });
      }
    },
    [history],
  );

  const handleChangeInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    dispatch(setSearchReduxStore(value));
    if (timerId) {
      clearTimeout(timerId);
    }
    const timerIdValue = setTimeout(() => {
      redirectPageWithSearch(value);
    }, 500);
    setTimerId(timerIdValue);
  };
  return (
    <Row className="d-flex align-items-center w-100 h-50">
      <Col xs={10} lg={11} className="d-flex w-100 h-100 p-0">
        <InputSearch
          id="email"
          onChange={handleChangeInput}
          value={searchValue}
          type="text"
          placeholder="nunca dejes de buscar"
        />
        <label htmlFor="email" />
      </Col>
      <Col
        xs={2}
        lg={1}
        className="d-flex justify-content-start align-items-center w-100 h-100 p-0">
        <ButtonSearch />
      </Col>
    </Row>
  );
};
