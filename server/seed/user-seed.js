const { User } = require('../models');

const userData = [
    {
        username: "user1",
        email: "user1@hotmail.com",
        password: "user1"
    },
    {
        username: "user2",
        email: "user2@hotmail.com",
        password: "user3"
    },
    {
        username: "user3",
        email: "user3@hotmail.com",
        password: "user3"
    }
];

// const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;