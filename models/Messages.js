var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var messagesSchema = new Schema({
    sender: {
        id: {
            type: Schema.Types.ObjectId,
            ref: "profilemodel"
        },
        username: {
            type: String,
            default: "Guest"
        }
    },
    receiver: {
        id: {
            type: Schema.Types.ObjectId,
            ref: "profilemodel"
        },
        username: {
            type: String,
            default: "Guest"
        }
    },
    content: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

var Messages = mongoose.model("Messages", messagesSchema);

module.exports = Messages;