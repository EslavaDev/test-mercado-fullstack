import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { CustomHeader, CustomHeaderContainer } from './styles';
import Logo from '../../../assets/Logo_ML.png';
import Logox2 from '../../../assets/Logo_ML@2x.png';
import { IconML } from '../../atoms/icon-ml';
import { Search } from '../../organinsm/search';

export const Header = () => {
  return (
    <CustomHeader>
      <CustomHeaderContainer>
        <Col className="d-none d-sm-block" lg={1} />
        <Col
          className="d-flex justify-content-center align-items-center"
          xs={3}
          lg={1}>
          <Link to="/">
            <IconML
              width="100%"
              height="100%"
              src={Logo}
              alt="Logo"
              srcSet={`${Logox2} 2x`}
            />
          </Link>
        </Col>
        <Col className="d-flex align-items-center" xs={9} lg={9}>
          <Search />
        </Col>
        <Col className="d-none d-sm-block" lg={1} />
      </CustomHeaderContainer>
    </CustomHeader>
  );
};
