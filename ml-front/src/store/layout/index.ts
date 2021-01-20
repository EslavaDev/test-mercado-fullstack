import { Reducer } from 'redux';
import { initState } from './init-state';

export const layoutReducer: Reducer<LayoutState, SupportedActions> = (
  state = initState,
  action,
) => {
  switch (action.type) {
    case '@@LAYOUT/SET_LOADING': {
      return {
        ...state,
        loading: !!action.payload,
      };
    }

    case '@@LAYOUT/SET_SEARCH': {
      return {
        ...state,
        search: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
