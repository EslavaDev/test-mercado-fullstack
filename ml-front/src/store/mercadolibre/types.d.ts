interface ItemsMercadolibre {
  author: Author;
  categories: string[];
  items: ItemsEntity[];
}
interface ItemDetailMercadolibre {
  author: Author;
  item: ItemsEntityDetail;
}
interface Author {
  name: string;
  lastname: string;
}
interface ItemsEntity {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}
interface ItemsEntityDetail extends ItemsEntity {
  sold_quantity: number;
  description: string;
}
interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

/**
 * ML REDUCER ACTIONS TO BE DISPATCHED
 */
type MLActions =
  | { type: '@@ML/SET_LOADING'; payload?: boolean }
  | {
      type: '@@ML/SET_ML';
      payload: Record<string, string | number | boolean>[];
    }
  | {
      type: '@@ML/SET_ML_SELECTED';
      payload: Record<string, string | number | boolean>;
    }
  | {
      type: '@@ML/SET_ML_SELECTED_CLEAR';
      payload?: string;
    }
  | { type: '@@ML/LOAD_FAILED'; error?: string };
/**
 * ML REDUX STATE
 */
interface MLState {
  loading: boolean;
  itemsML?: ItemsMercadolibre;
  itemDetail?: ItemDetailMercadolibre;
}
