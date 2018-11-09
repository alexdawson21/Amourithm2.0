var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;
var router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Requiring the `Example` model for accessing the `examples` collection
var NewUser = require("./models/profilemodel.js");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dummydb", function() {
  console.log("Mongoose connected!")
});
//test stuff

var server = app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
var io = require('socket.io').listen(server);

io.on('connection', function (socket) {
  console.log(`SocketID: ${socket.id} connected!`);
  io.emit('user connected');
  
  socket.on('subscribeToTimer', function (interval) {
    console.log(`Socket is subscribing to timer with interval ${interval}`);
    setInterval(function () {
      socket.emit('timer', new Date);
    }, interval);
  });
  socket.on('disconnect', function () {
    console.log(`SocketID: ${socket.id} disconnected`);
    io.emit('user disconnected');
  });
});