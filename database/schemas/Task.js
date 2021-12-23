const {Schema} = require("../mongoConnection")

const Task = new Schema({
    task: {
        type:String,
        required:true,
    },
    status: {
        type:Boolean,
        required:true
    },
    userId: {
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})

module.exports = Task