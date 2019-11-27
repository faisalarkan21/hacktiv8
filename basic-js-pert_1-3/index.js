const UsersEntity = require("./utils/entity/users");
const PostsEntity = require("./utils/entity/posts");
const UsersMock = require('./utils/dummy-data/user');

const instanceUserEntity = new UsersEntity();
const instancePostsEntity = new PostsEntity();

instanceUserEntity.getUsers().then(data => {
    console.log("data", data);
});

instanceUserEntity.postAddUser(UsersMock).then(data => {
  // console.log(data);
});

instanceUserEntity.getDetailUser(41).then(data => {
    // console.log("data", data);
});

instancePostsEntity.getPosts().then(data => {
  //   console.log("data", data);
});

instancePostsEntity.getDetailPosts("1").then(data => {
  //   console.log("data", data);
});
