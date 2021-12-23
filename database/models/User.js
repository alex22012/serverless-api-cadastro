const mongoose = require("../mongoConnection")
const User = require("../schemas/User")

module.exports = mongoose.model("User", User)