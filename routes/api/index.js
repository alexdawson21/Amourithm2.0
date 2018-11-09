var router = require("express").Router();
var profileRoutes = require("./profile");
var suitorRoutes = require("./suitors");
var imageRoutes = require('./image');
var messagesRoutes = require('./messages');
var loginRoutes = require('./login');

router.use("/profile", profileRoutes);
router.use("/suitors", suitorRoutes);
router.use("/image", imageRoutes);
router.use("/messages", messagesRoutes);
router.use("/login", loginRoutes);
module.exports = (router);