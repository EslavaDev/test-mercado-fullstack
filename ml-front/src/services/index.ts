import axios from 'axios';

import { MercadoLibre } from './mercadolibre';

axios.defaults.baseURL = 'http://localhost:5000/api';
class ApiClient {
  MercadoLibre = new MercadoLibre(axios);

  buildServices = (url?: string) => {
    axios.defaults.baseURL = url || 'http://localhost:5000/api';

    this.MercadoLibre = new MercadoLibre(axios);
  };
}

export const apiClient = new ApiClient();
