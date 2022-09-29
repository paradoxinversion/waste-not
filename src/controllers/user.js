const { createUser: create, readUser: read } = require("../actions/user")

const createUser = async (req, res, next) => {
    const {username, password} = req.body;
    try{
        const newUser = await create(username, password);
        res.json({user: newUser});
    }catch(e){
        console.log(e)
    }

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