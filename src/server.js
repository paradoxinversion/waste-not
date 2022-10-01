require('dotenv').config()
const express = require('express')
const morgan = require("morgan")
const passport = require("passport")
const session = require('express-session');
const configurator = require("./config");
const connectDatabase = require("./db/connect-db")
const api = require("./routes")
const config = configurator();
const app = express()
const port = config.application.port
const LocalStrategy = require("passport-local");
const User = require("./db/schema/user");
const bcrypt = require("bcryptjs")
const Bree = require('bree');
const cors = require('cors');
const logRequest = require('./middleware/logRequest');

connectDatabase();
app.use(cors())
// Start jobs for alerting
const bree = new Bree({
  jobs:
    [
      {
        name: "checkExpirations",
        interval: "every 20 seconds"
      }
    ]
});

// (async () => {
//   await bree.start();
// })();

// Prepare standard middleware
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: config.application.sessionSecret,
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
}));

app.use(passport.initialize());
app.use(passport.authenticate('session'));

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, {
          message: INCORRECT_USERNAME_OR_PASSWORD_RESPONSE,
        });
      }
      const passwordSuccess = bcrypt.compareSync(password, user.password);
      if (!passwordSuccess) {
        return done(null, false, {
          message: INCORRECT_USERNAME_OR_PASSWORD_RESPONSE,
        });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, user: user.username });
  })
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, user: user.username });
  })
});

app.get('/', logRequest, (req, res) => {
  res.send('Hello World!')
})

app.use("/api/v1", api);

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(port, () => {
  console.log(`Waste Not instance started on port ${port}`)
})