"use-strict"

const User = require("./database/models/User")

module.exports.newUser = async event => {
    try {
        const resp = await User.create(event.body)
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

module.exports.auth = async event => {
    try {
        let {email, password} = event.body
        const user = User.findOne({email})
        if(user){
            if(user.password === password){
                return {
                    statusCode:204,
                }
            }else {
                return {
                    statusCode:401,
                    body:JSON.stringify({error:"Unauthorized"})
                }
            }
        }else{
            return {
                statusCode:404,
                body:JSON.stringify({error:"User not found"})
            }
        }
    } catch (error) {
        return {
            statusCode:500,
            body:JSON.stringify({error})
        }
    }
}