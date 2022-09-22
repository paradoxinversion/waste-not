const { createUser: create, readUser: read } = require("../actions/user")

const createUser = async (req, res, next) => {
    // get the json fields `username` and `password`
    // TODO: Add checks that these fields exist
    const {username, password} = req.body;
    // pass the fields into the actions/users fn
    try{
        const newUser = await create(username, password);
        res.json({user: newUser});
    }catch(e){
        console.log(e)
    }
    // respond
 
}

const readUser = async (req, res, next) => {
    try{
        const user = await read(req.params.userId);
        res.json({user});
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    createUser,
    readUser
}