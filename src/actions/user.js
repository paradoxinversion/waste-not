const User = require("../db/schema/user")
const bcrypt = require("bcryptjs")
const createUser = async (username, password) => {
    // Check the db for an existing user
    const existingUser = await User.find({username});

    if (existingUser){
        // User already exists
        return new Error(`User ${existingUser.username} already exists. Please choose a different username.`)
    }
    // hash the password
    const salt = bcrypt.genSaltSync(10);

    const hashedPass = bcrypt.hashSync(password, salt);
    if (!hashedPass){
        return new Error("Waste Note was unable to hash your password. ")
    }
    // create the entry
    const user = new User({ username, password: hashedPass});
    //save to db
    await user.save()

    // TODO: Project the fields we actually need
    return user;
}

const readUser = (userID) => {
    const user = User.find({_id: userID});

    if (!user){
        return new Error(`User ${userID} could not be fond.`)
    }

    // TODO: Project the fields we actually need
    return user;
}

const updateUser = (userID) => new Error("Not Implemented")

const deleteUser = (userID) => new Error("Not Implemented")

module.exports = {
    createUser,
    readUser
}