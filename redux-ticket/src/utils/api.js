import axios from 'axios'

class Services {
  constructor() {
    this.baseUrl = "http://103.93.52.72:9090/";
  }

  get(params) {
    return axios.get(`${this.baseUrl}${params}`).then(({ data }) => {
      return data;
    });
  }

  post(params, data = '') {
    return axios.post(`${this.baseUrl}${params}`, data).then(({ data }) => {
      return data;
    });
  }
}

export default Services;