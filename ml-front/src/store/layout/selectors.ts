import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.layout;
};

export const getLayoutLoading = compose((layoutState) => {
  return layoutState.loading;
}, rootState);

export const getLayoutSearch = compose((layoutState) => {
  return layoutState.search;
}, rootState);
