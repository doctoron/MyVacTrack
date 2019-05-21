const router = require("express").Router();
const Users = require("../../controllers/userController");

// api/users/
router.route("/")
    .get(Users.findUser)
    .put(Users.findUser)
    .post(Users.create);

// Matches with "/api/users/:id"
// router.route("/:id")
//   .get(users.findById)
//   .put(users.update)
//   .delete(users.remove);

module.exports = router;
