const router = require("express").Router();
const Members = require("../../controllers/memberController");

// /api/members
router.route("/")
  .get(Members.findUser)
  .put(Members.findUser)
  .post(Members.create);

// Matches with "/api/Members/:id"
// router.route("/:id")
//   .get(Members.findById)
//   .put(Members.update)
//   .delete(Members.remove);

module.exports = router;
