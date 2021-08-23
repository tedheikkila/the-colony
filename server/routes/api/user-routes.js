const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  deletePost,
  login,
  createPost,
  addPostToUser,
  getposts,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/feed').get(getposts);

router.route('/feed').post(createPost, addPostToUser);

router.route('/feed').put(authMiddleware, addPostToUser);


// router.post("/feed", async (req, res) => {
//   const {_id} = await createPost(req)
  // call the user model and add the id of the post that just got created
// })


router.route('/posts/:postId').delete(authMiddleware, deletePost);

module.exports = router;
