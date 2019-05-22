const router = require("express").Router();
const Vaccines = require("../../controllers/vaccineController");

// Matches with "/api/vaccines"
router.route("/")
  .get(Vaccines.find)
  .put(Vaccines.find);
// .post(Vaccines.findOne)

// Matches with "/api/Vaccines/:id"
router.route("/:id")
  .get(Vaccines.findById)
  .put(Vaccines.update)
  .delete(Vaccines.remove);

module.exports = router;
