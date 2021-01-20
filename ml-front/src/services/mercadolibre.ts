import { AxiosInstance } from 'axios';

export class MercadoLibre {
  constructor(private client: AxiosInstance) {}

  get(search: string) {
    return this.client.get(`/items?q=${search}&limit=4`);
  }

  getId(id: string) {
    return this.client.get(`/items/${id}`);
  }
}
