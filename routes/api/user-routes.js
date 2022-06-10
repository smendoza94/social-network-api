const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUsers).get(getUserById).post(createUser);

module.exports = router;
