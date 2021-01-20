import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Header } from '../header';
import { Seo } from '../seo';
import {
  ContainerLayoutMain,
  ColLayoutFather,
  ContainerLayout,
} from './styles';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children, title, description }: Props) => {
  return (
    <ContainerLayout>
      <Header />

      <ContainerLayoutMain>
        <Seo title={title} description={description} />
        <Row>
          <Col lg={1} />
          <ColLayoutFather className="p-0" lg={10}>
            {children}
          </ColLayoutFather>
          <Col lg={1} />
        </Row>
      </ContainerLayoutMain>
      <footer>© {new Date().getFullYear()}, Created by EslavaDev</footer>
    </ContainerLayout>
  );
};
