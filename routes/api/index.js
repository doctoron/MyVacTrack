const router = require("express").Router();
const Users = require ("./user");
const Members = require("./members");
const Vaccines = require("./vaccines");

// Member routes
// api/users/myRoutes
// api/members/routes
router.use("/users", Users);
router.use("/members", Members);
router.use("/vaccines", Vaccines);

module.exports = router;
