const express = require("express");
const { createUser, readUser } = require("./controllers/user")
const router = express.Router();
const passport = require("passport");
const { 
  createInventoryItem, 
  getInventoryItems, 
  deleteInventoryItem, 
  updateInventoryItem 
} = require("./controllers/inventoryItems");

router
  .route("/inventory")
  .get(getInventoryItems)
  .post(createInventoryItem)
  .put(updateInventoryItem)
  .delete(deleteInventoryItem)


router
  .route("/login")
  .post(passport.authenticate("local"), (req, res, next) => {
    res.json({ "wee": "woo" })
  })
  
router
  .route("/users/signup")
  .post(createUser);

router
  .route("/users/:userId")
  .get(readUser)


module.exports = router;