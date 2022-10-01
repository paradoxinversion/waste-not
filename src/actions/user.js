const User = require("../db/schema/user")
const bcrypt = require("bcryptjs")

/**
 * Create a new user
 * @param {string} username 
 * @param {string} password 
 * @returns {Object} The resulting user's entry in the DB
 */
const createUser = async (username, password) => {
    // Check the db for an existing user
    const existingUser = await User.findOne({username});

    if (existingUser){
        // User already exists
        throw new Error(`User ${existingUser.username} already exists. Please choose a different username.`)
    }
    // hash the password
    const salt = bcrypt.genSaltSync(10);

    const hashedPass = bcrypt.hashSync(password, salt);
    
    if (!hashedPass){
        throw new Error("Waste Note was unable to hash your password. ")
    }

    // create the entry
    const user = new User({ username, password: hashedPass});
    //save to db
    await user.save();
    console.log("user saved");
    // TODO: Project the fields we actually need
    return user;
}

/**
 * Fetch a single user from the database
 * @param {string} userID 
 * @returns {import("../../typedefs").User|null} - The request user if they can be found, null otherwise
 */
const readUser = async (userID) => {
    console.log(userID)
    const user = await User.findById(userID).select("username");

    if (!user){
        return new Error(`User ${userID} could not be fond.`);
    }

    // TODO: Project the fields we actually need
    return user;
}

/**
 * Update a user's `username` or password.
 * 
 * Not yet implemented.
 * @param {string} userID 
 * @returns 
 */
const updateUser = (userID) => new Error("Not Implemented")

/**
 * Delete a user from the database.
 * 
 * Not yet implemented.
 * @param {string} userID 
 * @returns 
 */
const deleteUser = (userID) => new Error("Not Implemented")

module.exports = {
    createUser,
    readUser
}