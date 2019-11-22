const Services = require("../api");

class UsersEntity extends Services {
  getUsers() {
    return this.get("/users");
  }

  getDetailUser(id) {
    return this.get(`/users/${id}`);
  }

  postAddUser(data) {
    return this.post('/users', data)
  }
}

module.exports = UsersEntity;
