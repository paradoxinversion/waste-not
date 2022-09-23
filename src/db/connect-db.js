const mongoose = require("mongoose")
const connString = process.env.MONGODB_CONNSTRING;
const connect = () => {
  console.log(connString)
  mongoose.connect(`${connString}/waste-not`).then(
    ()=> {
      console.log("Connected to database.")
    },
    err => { console.log(err.message)}
  );
}

module.exports = connect;