const mongoose = require("../mongoConnection")
const Task = require("../schemas/Task")

module.exports = mongoose.model("Task", Task)