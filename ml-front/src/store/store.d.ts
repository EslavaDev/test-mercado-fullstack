import { ThunkAction } from 'redux-thunk';
import { apiClient } from '../services';

/**
 * REDUX AVAILABLE ACTIONS TO BE DISPATCHED
 */

/**
 * REDUX STATE INTERFACES
 */

type ThunksArgs = typeof apiClient;
interface ActionWithoutPayload<T extends string> {
  type: T;
  error?: string;
}

interface ActionWithPayload<T extends string, P> {
  type: T;
  payload: P;
  error?: string;
}
declare global {
  /**
   * REDUX REDUCERS STATES
   */

  interface ReduxState {
    layout: LayoutState;
    mercadolibre: MLState;
  }

  type BaseAction = ActionWithoutPayload<any> & ActionWithPayload<any, any>;

  type SupportedActions = ConfigActions | UserActions | ProfileActionType | any;

  type AsyncAction<R = void> = (
    args?: any,
    args1?: any,
  ) => ThunkAction<Promise<R>, ReduxState, ThunksArgs, SupportedActions>;
}
