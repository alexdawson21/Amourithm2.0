var router = require("express").Router();
var imageController = require("../../controllers/Imagecontroller");

router.route("/")
  .post(imageController.create)


module.exports = router;