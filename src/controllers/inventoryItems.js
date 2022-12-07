const {
    createInventoryItem: create, 
    readInventoryItem: readOne, 
    readInventoryItems: readAll, 
    deleteInventoryItem: deleteOne,
    updateInventoryItem: updateOne,
    bundleInventoryItems: bundle,
    importBundle
} = require("../actions/inventoryItems")

const createInventoryItem = async (req, res, next) => {
    try {

        const bodyFields = {
            name,
            purchaseDate,
            expirationDate,
            useOrFreezeDate,
            opened,
            used,
            foodType,
            notes
        } = req.body.createFields;
        
        const inventoryItemParams = { ...bodyFields }

        if (!purchaseDate) {
            purchaseDate = new Date(Date.now());
        }
        const item = await create(inventoryItemParams);
        res.json({ success: item })
    } catch (e) {
        res.json({ error: e.message })
    }
}

const getInventoryItem = async (req, res, next) => {
    try{
        const { inventoryItemId } = req.body;
        const inventoryItem = await readOne(inventoryItemId)
        res.json({ inventoryItem })
    }catch(e){
        res.json({ error: e.message })
    }
}

const getInventoryItems = async (req, res, next) => {
    try{

        const inventoryItem = await readAll();
        res.json({ inventoryItems: inventoryItem })
    }catch(e){
        res.json({ error: e.message })
    }
}

const deleteInventoryItem = async (req, res, next) => {
    try{
        const { inventoryItemId } = req.body;
        await deleteOne(inventoryItemId)
        res.json({ success: true })
    }catch(e){
        res.json({ error: e.message })
    }
}

const updateInventoryItem = async (req, res, next) => {
    try{
        const { inventoryItemId } = req.body;
        const updated = await updateOne(inventoryItemId, req.body.updateFields)
        res.json({ success: updated })
    }catch(e){
        res.json({ error: e.message })
    }
}

const bundleInventoryItems = async (req, res, next) => {
    try{
        const dataBundle = await bundle();
        res.json(dataBundle)
    }catch(e){
        res.json({ error: e.message })
    }
}

const importInventoryBundle = async (req, res, next) => {
    try{
        await importBundle(req.body.bundle);
    }catch(e){
        res.json({error: e.message})
    }
}

module.exports = {
    createInventoryItem,
    getInventoryItem,
    getInventoryItems,
    deleteInventoryItem,
    updateInventoryItem,
    bundleInventoryItems,
    importInventoryBundle
}