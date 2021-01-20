export const setSearchReduxStore = (searchText: string) => ({
  type: '@@LAYOUT/SET_SEARCH',
  payload: searchText,
});
