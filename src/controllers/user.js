const { createUser: create, readUser: read } = require("../actions/user")

const createUser = async (req, res, next) => {
    try{
        const {username, password} = req.body;
        const newUser = await create(username, password);
        res.json({user: newUser});
    }catch(e){
        res.json({ error: e.message })
    }

}

const readUser = async (req, res, next) => {
    try{
        const user = await read(req.params.userId);
        res.json({user});
    }catch(e){
        res.json({ error: e.message })
    }
}

module.exports = {
    createUser,
    readUser
}