const usersDummy = require("./dummy/user");
const axios = require("axios");

// let promise1 = new Promise(function(resolve, reject) {
//     resolve(usersDummy);
// });

// promise1.then(function(value) {
//   console.log(value);
// });

// console.log(promise1);

// =========================================================================

let result = axios.get(
  "http://5d60ae24c2ca490014b27087.mockapi.io/api/v1/users"
);
// console.log(result)
result.then(data => {
  console.log("data", data);
});
