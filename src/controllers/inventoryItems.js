const {
    createInventoryItem: create, 
    readInventoryItem: readOne, 
    readInventoryItems: readAll, 
    deleteInventoryItem: deleteOne,
    updateInventoryItem: updateOne
} = require("../actions/inventoryItems")

const createInventoryItem = async (req, res, next) => {
    try {

        const bodyFields = {
            name,
            purchaseDate,
            expirationDate,
            useOrFreezeDate,
            foodType
        } = req.body.createFields;
        
        const inventoryItemParams = { ...bodyFields }

        if (!purchaseDate) {
            purchaseDate = new Date(Date.now());
        }
        const item = await create(inventoryItemParams);
        return res.json({ success: item })
    } catch (e) {
        console.log(e)
        return res.json({ error: "something went wrong" })
    }
}

const getInventoryItem = async (req, res, next) => {
    const { inventoryItemId } = req.body;
    const inventoryItem = await readOne(inventoryItemId)
    return res.json({ inventoryItem })
}

const getInventoryItems = async (req, res, next) => {
    const inventoryItem = await readAll();
    return res.json({ inventoryItems: inventoryItem })
}

const deleteInventoryItem = async (req, res, next) => {
    const { inventoryItemId } = req.body;
    await deleteOne(inventoryItemId)
    return res.json({ success: true })
}

const updateInventoryItem = async (req, res, next) => {
    const { inventoryItemId } = req.body;
    const updated = await updateOne(inventoryItemId, req.body.updateFields)
    return res.json({ success: updated })
}


module.exports = {
    createInventoryItem,
    getInventoryItem,
    getInventoryItems,
    deleteInventoryItem,
    updateInventoryItem
}