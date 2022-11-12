const InventoryItem = require("../db/schema/inventoryItem");
/**
 * Create a new Inventory Item
 * @param {import("../../typedefs").InventoryItemFormFields} inventoryItemData 
 * @returns {import("../../typedefs").InventoryItem} - The new inventory Item
 */
const createInventoryItem = async (inventoryItemData) => {
  const {name, purchaseDate, expirationDate, useOrFreezeDate, foodType} = inventoryItemData;
  const inventoryItem = new InventoryItem({
    name,
    purchaseDate,
    expirationDate,
    useOrFreezeDate,
    foodType,
    opened,
    used,
    notes
  });

  await inventoryItem.save();
  return inventoryItem;
}

const importBundle = async (bundleArray) => {
  const importedItems = []
  bundleArray.forEach(async item => {
    importedItems.push(await createInventoryItem(...item));
  });
  console.log(`Bundle imported. ${importedItems.length} of ${bundleArray.length} items added to the database.`);
}

/**
 * Retrieve a single Inventory Item by its ID
 * @param {string} inventoryItemID 
 * @returns {import("../../typedefs").InventoryItem} - The inventory item
 */
const readInventoryItem = async (inventoryItemID) => {
  try{
    
    const inventoryItem = InventoryItem.findById(inventoryItemID);
    if (!inventoryItem){
      throw new Error("Inventory Item does not exist")
    }
  
    return inventoryItem;
  }catch(e){
    throw e;
  }
}

/**
 * Retrieve all inventory items.
 * 
 * This function will need to be modified in the future to account for 
 * large amounts of items (when multiple users are implemented)
 * @returns {[import("../../typedefs.js").InventoryItem]} - An array of all inventory items.
 */
const readInventoryItems = async () => {
  try{

    const inventoryItems = await InventoryItem.find({}).sort("purchaseDate");
    return inventoryItems;
  }catch(e){
    throw e;
  }
}

/**
 * Delete an Inventory Item from the database by its ID
 * @param {string} inventoryItemID 
 * @returns {boolean} `true` if the operation succeeded
 */
const deleteInventoryItem = async (inventoryItemID) => {
  try{
    const result = await InventoryItem.findByIdAndDelete(inventoryItemID);
    return true;
  }catch(e){
    throw e;
  }
}

/**
 * Update an Inventory Item by its ID. Valid fields on the `newFields`
 * object will replace old values.
 * @param {*} inventoryItemID 
 * @param {*} newFields 
 * @returns {boolean} - `true` if the operation succeeded
 */
const updateInventoryItem = async (inventoryItemID, newFields) => {
  try{

    const updatedFields = {...newFields};
    const result = await InventoryItem.findByIdAndUpdate(inventoryItemID, updatedFields, {
      new: true
    });

    return result;
  }catch(e){
    throw e;
  }
}

const bundleInventoryItems = async () => {
  try{
    const inventoryItems = await InventoryItem.find({}).select("name purchaseDate expirationDate opened expiryAlertDispatched createdAt notes").sort("purchaseDate");
    return inventoryItems
  }catch(e){
    throw e;
  }
}

module.exports = {
  createInventoryItem,
  readInventoryItem,
  readInventoryItems,
  deleteInventoryItem,
  updateInventoryItem,
  bundleInventoryItems,
  importBundle
}