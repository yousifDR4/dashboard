import axios from "axios";

class api {
  apiUrl = import.meta.env.VITE_API_URL;

  static get apiUrl() {
    return apiUrl;
  }
  static set apiUrl(value) {
    apiUrl = value;
  }
  post(url, data, headers = null) {
    if (headers)
      return axios.post(`${this.apiUrl}${url}`, data, { headers: headers });
    else return axios.post(`${this.apiUrl}${url}`, data);
  }

  delete(url, headers = null) {
    if (headers)
      return axios.delete(`${this.apiUrl}${url}`, { headers: headers });
    else return axios.delete(`${this.apiUrl}${url}`);
  }

  put(url, data, headers = null) {
    if (headers)
      return axios.put(`${this.apiUrl}${url}`, data, { headers: headers });
    else return axios.put(`${this.apiUrl}${url}`, data);
  }
  get(url, headers = null) {
    if (headers) return axios.get(`${this.apiUrl}${url}`, { headers: headers });
    else return axios.get(`${this.apiUrl}${url}`);
  }
}
export const apiInstance = new api();
