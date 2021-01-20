import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  clearMLSelected,
  getItemById,
} from '../../../store/mercadolibre/actions';
import {
  getCategories,
  getMLDetail,
} from '../../../store/mercadolibre/selectors';
import { CardDetail } from '../../organinsm/card-detail';
import { CategoryList } from '../../organinsm/category-list';
import { Layout } from '../../template/layout';

export const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const itemDetailSelector = useSelector(getMLDetail);
  useEffect(() => {
    dispatch(getItemById(id));
    return () => {
      dispatch(clearMLSelected());
    };
  }, [id, dispatch]);
  return (
    <Layout title="Item Detail" description="page to see the product detail">
      {categories && <CategoryList categories={categories} />}
      {itemDetailSelector && <CardDetail {...itemDetailSelector} />}
    </Layout>
  );
};
