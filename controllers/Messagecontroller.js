var db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Messages
            .find({})
            .sort({ timestamp: -1 })
            .then(results => {
                res.json(results);
            })
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Messages
            .create(req.body)
            .then(newMessage => {
                res.json(newMessage);
            })
            .catch(err => res.status(422).json(err));
    }
};
