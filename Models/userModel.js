const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin", "moderator"],
    },
    securityQuestion: { type: String, required: true },
    securityQuestionAnswer: { type: String, required: true },
});

module.exports = mongoose.model("Users", UserSchema);
