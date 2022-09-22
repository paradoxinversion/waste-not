const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventoryItemSchema = new Schema({
    name: String,
    purchaseDate: Date,
    expirationDate: Date,
    useOrFreezeDate: Date,
    foodType: String,
    user: Schema.Types.ObjectId, ref: "User" //mongoose schema something or other
});

const InventoryItem = mongoose.model("InventoryItem", inventoryItemSchema); 

module.exports = InventoryItem;