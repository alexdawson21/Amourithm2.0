const db = require("../models");

module.exports = {
    findMen: function(req, res) {
        db.Userprofile
          .find({gender: "male"})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findWomen: function(req, res) {
        db.Userprofile
          .find({gender: "female"})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}