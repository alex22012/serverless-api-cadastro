const mongoose = require("mongoose")

mongoose.set("runValidators", true)
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://alex:lrsQ26cZ4wUwerjc@cluster0.5ovhs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose