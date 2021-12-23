"use-strict"

const Task = require("./database/models/Task")
const mongoose = require("./database/mongoConnection")

module.exports.newTask = async event => {
    try {
        let {task, status, userId} = event.body
        let _userId = mongoose.mongo.ObjectId(userId)
        const resp = await Task.create({task, status, userId:_userId})
        return {
            statusCode:201,
            body:JSON.stringify({id:resp._id})
        }
    } catch (error) {
        return {
            statusCode:500,
            body:JSON.stringify({error})
        }
    }
}

module.exports.getUserTasks = async event => {
    let {id} = event.pathParameters
    try {
        let _id = mongoose.mongo.ObjectId(id)
        const resp = await Task.find({userId:id}).exec()
        return {
            statusCode:200,
            body:JSON.stringify({data:resp})
        }
    } catch (error) {
        return {
            statusCode:500,
            body:JSON.stringify({error})
        }
    }
}

module.exports.updateTask = async event => {
    let {id} = event.pathParameters
    let {status} = event.body
    try {
        let _id = mongoose.mongo.ObjectId(id)
        const resp = await Task.findOneAndUpdate({_id}, {status})
        return {
            statusCode:204
        }
    } catch (error) {
        return {
            statusCode:500,
            body:JSON.stringify({error})
        }
    }
}

module.exports.deleteTask = async event => {
    let {id} = event.pathParameters
    try {
        let _id = mongoose.mongo.ObjectId(id)
        await Task.findOneAndDelete({_id})
        return {
            statusCode:204
        }
    } catch (error) {
        return {
            statusCode:500,
            body:JSON.stringify({error})
        }
    }
}