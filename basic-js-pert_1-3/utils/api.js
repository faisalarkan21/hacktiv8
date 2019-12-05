const axios = require("axios");

class Services {
  constructor() {
    this.baseUrl = "http://5d60ae24c2ca490014b27087.mockapi.io/api/v1/";
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

module.exports = Services;