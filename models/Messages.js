var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var messagesSchema = new Schema({
    content: {
        type: String,
        default: "PLACEHOLDER",
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now(),
        required: true
    }
});

// var messagesSchema = new Schema({
//     sender: {
//         id: {
//             type: Schema.Types.ObjectId,
//             ref: "Userprofile"
//         },
//         username: {
//             type: String,
//             default: "Guest"
//         }
//     },
//     receiver: {
//         id: {
//             type: Schema.Types.ObjectId,
//             ref: "Userprofile"
//         },
//         username: {
//             type: String,
//             default: "Guest"
//         }
//     },
//     content: {
//         type: String
//     },
//     timestamp: {
//         type: Date,
//         default: Date.now()
//     }
// });

var Messages = mongoose.model("Messages", messagesSchema);

module.exports = Messages;
