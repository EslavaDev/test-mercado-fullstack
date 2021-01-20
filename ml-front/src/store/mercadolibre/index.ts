import { Reducer } from 'redux';
import { initState } from './init-state';

export const MLReducer: Reducer<MLState, SupportedActions> = (
  state = initState,
  action,
) => {
  switch (action.type) {
    case '@@ML/SET_LOADING': {
      return {
        ...state,
        loading: !!action.payload,
      };
    }
    case '@@ML/LOAD_FAILED': {
      return {
        ...state,
        loading: !!action.payload,
      };
    }
    case '@@ML/SET_ML': {
      return {
        ...state,
        itemsML: action.payload,
      };
    }
    case '@@ML/SET_ML_SELECTED_CLEAR': {
      if (action.payload) {
        return {
          ...state,
          itemDetail: undefined,
        };
      }
      return initState;
    }
    case '@@ML/SET_ML_SELECTED': {
      return {
        ...state,
        itemDetail: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
