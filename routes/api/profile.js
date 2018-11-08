var router = require("express").Router();
var profileController = require("../../controllers/Profilecontroller.js");


router.route("/")
  .get(profileController.findAll)

  // router.route("/db/account/register")
  .post(profileController.create) 
  
router
  .route("/:id")
  .get(profileController.findById)
  .put(profileController.update)
  .delete(profileController.remove);


module.exports = router;