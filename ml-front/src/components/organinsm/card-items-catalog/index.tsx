import React, { useCallback } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setSearchReduxStore } from '../../../store/layout/actions';
import { IconML } from '../../atoms/icon-ml';
import Shopping from '../../../assets/ic_shipping.png';
import Shoppingx2 from '../../../assets/ic_shipping@2x.png';
import {
  ImageCardItemsCatalog,
  ContainerPrincipalCardItemsCatalog,
  ColImageItemsCatalog,
  ColContentItemsCatalog,
  TextAuthorItemsCatalog,
  TextItemsCatalog,
} from './styles';

export const CardItemsCatalog = ({
  id,
  picture,
  price,
  title,
  free_shipping,
}: ItemsEntity) => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const handleClickCard = useCallback(() => {
    dispatch(setSearchReduxStore(''));

    push(`/items/${id}`);
  }, [dispatch, id, push]);
  return (
    <ContainerPrincipalCardItemsCatalog
      lg={12}
      className="shadow-sm"
      onClick={handleClickCard}>
      <ColImageItemsCatalog lg={4} xl={3} xs={6} sm={3} md={4} className="p-0">
        <ImageCardItemsCatalog
          alt={id}
          width="180"
          height="180"
          src={picture}
        />
      </ColImageItemsCatalog>
      <Col
        lg={8}
        sm={9}
        md={8}
        xl={9}
        xs={12}
        className="d-flex flex-column align-items-center justify-content-center   p-0  m-0">
        <Row lg={12} className="w-100 p-0 m-0 mb-3">
          <ColContentItemsCatalog md={8} lg={10} xs={6} className=" p-0  m-0">
            <div className="price">
              <TextItemsCatalog fontWeight="normal" fontSize={24}>
                {Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: price.currency,
                }).format(price.amount)}
              </TextItemsCatalog>
              {free_shipping && (
                <IconML
                  width="20"
                  height="20"
                  className="freeShipping"
                  src={Shopping}
                  alt={`shopping-${id}`}
                  srcSet={`${Shoppingx2} 2x`}
                />
              )}
            </div>
          </ColContentItemsCatalog>
          <ColContentItemsCatalog
            lg={2}
            md={4}
            xs={6}
            className="d-flex flex-column justify-content-center  p-0  m-0">
            <TextAuthorItemsCatalog fontWeight="normal" fontSize={12}>
              Capital federal
            </TextAuthorItemsCatalog>
          </ColContentItemsCatalog>
        </Row>
        <Row lg={12} className="d-flex align-items-center p-0 m-0 w-100">
          <ColContentItemsCatalog lg={4} md={6} xs={6} className=" p-0  m-0">
            <TextItemsCatalog fontWeight="normal" fontSize={18}>
              {title}
            </TextItemsCatalog>
          </ColContentItemsCatalog>
          <Col lg={8} md={6} className=" p-0  m-0" />
        </Row>
      </Col>
    </ContainerPrincipalCardItemsCatalog>
  );
};
