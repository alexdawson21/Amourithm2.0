var router = require("express").Router();
var profileController = require("../../controllers/Profilecontroller.js");


router.route("/")
  .get(profileController.findAll)
  
  // router.route("/db/account/register")
  .post(profileController.create) 
  
router
  .route("/email")
  .get(profileController.findByEmail)


module.exports = router;