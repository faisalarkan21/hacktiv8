const Services = require("../api");

class PostsEntity extends Services {
  getPosts() {
    return this.get("/posts");
  }

  getDetailPosts(id) {
    return this.get(`/posts/${id}`);
  }

  getExplore() {
    return this.get("/explore");
  }
}

module.exports = PostsEntity;
