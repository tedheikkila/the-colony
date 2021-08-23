const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  login,
  createPost,
  getposts,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/feed').get(getposts);

router.route('/feed').post(createPost);

// router.route('/posts/:postId').delete(authMiddleware, deletePost);

module.exports = router;
