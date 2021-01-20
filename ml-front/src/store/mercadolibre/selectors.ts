import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.mercadolibre;
};

export const getMLLoading = compose((MLState) => {
  return MLState.loading;
}, rootState);

export const getAllML = compose((MLState) => {
  return MLState.itemsML;
}, rootState);
export const getMLDetail = compose((MLState) => {
  return MLState.itemDetail;
}, rootState);

export const getCategories = compose((MLState) => {
  return MLState.itemsML?.categories;
}, rootState);
