const { Post } = require('../models');

const postData = [
    {
        user_id: 1,
        post_content: "",
        title: "user1"
    },
    {
        user_id: 2,
        post_content: "",
        title: "user2"
    },
    {
        user_id: 3,
        post_content: "",
        title: "user3"
    },
]

// const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;