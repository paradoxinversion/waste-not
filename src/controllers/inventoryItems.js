const {createInventoryItem: create, readInventoryItem: readOne} = require("../actions/inventoryItems")

const createInventoryItem = async (req, res, next) => {
    const {
        name,
        purchaseDate,
        expirationDate,
        useOrFreezeDate,
        foodType
    } = req.body;
    user = req.user.id
    const iventoryItemParams = {
        name,
        purchaseDate,
        expirationDate,
        useOrFreezeDate,
        foodType,
        user
    }
    const item = await create(user, iventoryItemParams);
    return res.json({success: "Item added" })
}

const getInventoryItem = (req, res, next) => {
    const {inventoryItemId} = req.body;
    const inventoryItem = readOne(inventoryItemId) 
    return res.json({inventoryItem})
}

module.exports = {
    createInventoryItem,
    GetFood: getInventoryItem
}