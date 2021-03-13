const User = require('../models/User')

/**
 * Creates a new user and returns it
 * @param {Object} userInput - User Input with all variables for user model
 */

const addUser = async (userInput) => {
        const user = new User(userInput)
        await user.save()
        return user
    } 


    module.exports = {addUser}