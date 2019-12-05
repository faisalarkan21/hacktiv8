const axios = require("axios");

function print(data) {
     console.log(data)
}

function filterCash(data, callback) {
    callback(data.filter(v => v.cash > 3000));
}

(function getUsers() {
  axios
    .get("http://5d60ae24c2ca490014b27087.mockapi.io/api/v1/users")
    .then(({ data }) => {
      filterCash(data, print);
    });
})()

