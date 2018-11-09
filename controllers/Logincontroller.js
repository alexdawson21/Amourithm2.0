const db = require("../models");

module.exports = {
    login: function(req, res) {
        console.log("hey");
        db.Userprofile
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
    }