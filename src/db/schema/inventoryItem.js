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
    opened: {
        type: Boolean,
        default: false
    },
    used: {
        type: Boolean,
        default: false
    },
    foodType: {
        type: String
    },
    expiryAlertDispatched: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String
    }
    // user: Schema.Types.ObjectId, ref: "User"
}, {timestamps: true});

const InventoryItem = mongoose.model("InventoryItem", inventoryItemSchema); 

module.exports = InventoryItem;