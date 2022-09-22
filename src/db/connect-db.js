const mongoose = require("mongoose")
const connString = process.env.MONGODB_CONNSTRING;
const connect = () => {
  mongoose.connect(`${process.env.MONGODB_CONNSTRING}/waste-not`).then(
    ()=> {
      console.log("Connected to database.")
    },
    err => { console.log(err.message)}
  );
}

module.exports = connect;