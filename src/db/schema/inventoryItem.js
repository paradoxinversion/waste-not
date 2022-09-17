import mongoose from 'mongoose';
const { Schema } = mongoose;

const inventoryItemSchema = new Schema({
    name: String,
    purchase_date: Date,
    expiration_date: Date,
    use_or_freeze_date: Date,
    food_type: String,
    user: //mongoose schema something or other
});

const InventoryItem = mongoose.model("Inventory", inventoryItemSchema); 

module.exports = InventoryItem;