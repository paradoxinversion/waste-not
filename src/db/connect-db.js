const mongoose = require("mongoose")
const configurator = require("../config");
const config = configurator();
const connString = config.database.mongodb_connection_string;

const connect = () => {
  console.log(`Connecting to Waste Not MongoDB Instance ${connString}`);
  mongoose.connect(`${connString}`).then(
    () => {
      console.log("Connected to MongoDB Instance.")
    },
    err => { console.log(err.message) }
  );
}

module.exports = connect;