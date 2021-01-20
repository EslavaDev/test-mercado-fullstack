/**
 * LAYOUT REDUCER ACTIONS TO BE DISPATCHED
 */
type LayoutActions =
  | { type: '@@LAYOUT/SET_LOADING'; payload?: boolean }
  | {
      type: '@@LAYOUT/SET_SEARCH';
      payload: Record<string, string | number | boolean>;
    }
  | { type: '@@LAYOUT/LOAD_FAILED'; error?: string };
/**
 * LAYOUT REDUX STATE
 */
interface LayoutState {
  loading: boolean;
  search: string;
}
