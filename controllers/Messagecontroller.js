var db = require("../models");


module.exports = {
    findAll: function (req, res) {
        db.Messages
            .find(req.query)
            .then(results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        var message = new Message({content: req.body})

        message.save()
            .then(newEntry => res.json(newEntry))
            .catch(err => res.status(422).json(err));
    }
};