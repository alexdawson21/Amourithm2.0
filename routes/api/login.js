var router = require("express").Router();
var profileController = require("../../controllers/Profilecontroller");

router.route("/")
.get(profileController.findAll)


module.exports = router;