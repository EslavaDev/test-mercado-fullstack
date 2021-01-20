const setMLLoading = (isLoading?: boolean) => ({
  type: '@@ML/SET_LOADING',
  payload: isLoading,
});
export const getSearchMercadoLibre: AsyncAction = (search: string) => {
  return async (dispatch, getState, { MercadoLibre }) => {
    dispatch(setMLLoading(true));
    try {
      const { data } = await MercadoLibre.get(search);
      dispatch({
        type: '@@ML/SET_ML',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: '@@ML/LOAD_FAILED',
      });
    } finally {
      dispatch(setMLLoading(false));
    }
  };
};
export const getItemById: AsyncAction = (id: string) => {
  return async (dispatch, getState, { MercadoLibre }) => {
    dispatch(setMLLoading(true));
    try {
      const { data } = await MercadoLibre.getId(id);

      if (data.code === 400) {
        throw data.message;
      }

      dispatch({
        type: '@@ML/SET_ML_SELECTED',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: '@@ML/LOAD_FAILED',
      });
    } finally {
      dispatch(setMLLoading(false));
    }
  };
};

export const clearMLSelected = () => {
  return {
    type: '@@ML/SET_ML_SELECTED_CLEAR',
  };
};
