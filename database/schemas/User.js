const {Schema} = require("../mongoConnection")

const User = new Schema({
    name:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports = User