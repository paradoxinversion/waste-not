const mongoose = require("mongoose")
const connString = process.env.MONGODB_CONNSTRING;

const connect = () => {
  console.log("Connecting to Waste Not MongoDB Instance")
  mongoose.connect(`${connString}/waste-not`).then(
    ()=> {
      console.log("Connected to MongoDB Instance.")
    },
    err => { console.log(err.message)}
  );
}

module.exports = connect;