const db = require("../models");


module.exports = {
    create: function(req, res) {
        db.Userprofile
          .create(req.body)
          .then(dbModel =>console.log(dbModel))
          .catch(err => res.status(422).json(err));
      },
}