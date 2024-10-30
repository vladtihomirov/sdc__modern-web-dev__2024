import axios from 'axios';

export class BaseService {
  private static readonly baseUrl: string = '/data/';

  protected static get<T>(url: string): Promise<T> {
    return axios.get<T>(this.baseUrl + url).then(response => response.data);
  }

  protected static post<T>(url: string, data: object): Promise<T> {
    return axios.post<T>(this.baseUrl + url, data).then(response => response.data);
  }

  protected static put<T>(url: string, data: object): Promise<T> {
    return axios.put<T>(this.baseUrl + url, data).then(response => response.data);
  }

  protected static delete<T>(url: string): Promise<T> {
    return axios.delete<T>(this.baseUrl + url).then(response => response.data);
  }
}