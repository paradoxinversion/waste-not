const express = require("express");
const {createUser, readUser} = require("./controllers/user")
const ensureLogIn = require('connect-ensure-login').ensureLoggedIn;
const router = express.Router();
const passport = require("passport")
const ensureLoggedIn = ensureLogIn();
router
  .route("/users/signup")
  .post(createUser);

router
  .route("/login")
  .post(passport.authenticate("local"), (req, res, next) => {
    res.json({"wee": "woo"})
  })

router
  .route("/users/:userId")
  .get(ensureLoggedIn, readUser)
module.exports = router;