var router = require("express").Router();
var suitorController = require("../../controllers/Suitorcontroller");

router.route("/men")
  .get(suitorController.findMen)

router.route("/women")
    .get(suitorController.findWomen)

router.route("/word")
    .get(suitorController.findWomen)

module.exports = router;