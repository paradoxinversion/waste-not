const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventoryItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    expirationDate: {
        type: Date
    },
    useOrFreezeDate: {
        type: Date
    },
    foodType: {
        type: String
    },
    expiryAlertDispatched: {
        type: Boolean,
        default: false
    }
    // user: Schema.Types.ObjectId, ref: "User"
});

const InventoryItem = mongoose.model("InventoryItem", inventoryItemSchema); 

module.exports = InventoryItem;