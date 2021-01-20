import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getSearchMercadoLibre } from '../../../store/mercadolibre/actions';
import { getAllML } from '../../../store/mercadolibre/selectors';
import { CardItemsCatalog } from '../../organinsm/card-items-catalog';
import { CategoryList } from '../../organinsm/category-list';
import { Layout } from '../../template/layout';

export const Items = () => {
  const itemsML = useSelector(getAllML);
  const dispatch = useDispatch();
  const { search } = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(search).get('search');
    dispatch(getSearchMercadoLibre(query));
  }, [dispatch, search]);
  return (
    <Layout
      title="Items"
      description="page to see the products in the search result">
      {itemsML && (
        <>
          <CategoryList categories={itemsML.categories} />
          {itemsML.items.map((item) => (
            <CardItemsCatalog key={item.id} {...item} />
          ))}
        </>
      )}
    </Layout>
  );
};
