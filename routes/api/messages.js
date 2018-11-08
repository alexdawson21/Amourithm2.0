var router = require("express").Router();
var messageController = require("../../controllers/Messagecontroller");

router.route("/")
    .get(messageController.findAll)
    .post(messageController.create);

module.exports = router;