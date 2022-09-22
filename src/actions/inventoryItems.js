const InventoryItem = require("../db/schema/inventoryItem");

const createInventoryItem = async (userId, {name, purchaseDate, expirationDate, userOrFreezeDate, foodType}) => {
  const inventoryItem = new InventoryItem({
    name,
    purchaseDate,
    expirationDate,
    useOrFreezeDate,
    foodType,
    user: userId
  })

  await inventoryItem.save();
  return inventoryItem;
}

const readInventoryItem = async (inventoryItemID) => {
  const inventoryItem = InventoryItem.findById(inventoryItemID);
  if (!inventoryItem){
    throw new Error("Inventory Item does not exist")
  }

  return inventoryItem;
}

const deleteInventoryItem = async (inventoryItemID) => {
  const result = await InventoryItem.findByIdAndDelete(inventoryItemID);

  return true;
}

const updateInventoryItem = async (inventoryItemID, newFields) => {
  
  const result = await InventoryItem.findByIdAndDelete(inventoryItemID);

  return true;
}

module.exports = {
  createInventoryItem,
  readInventoryItem,
  deleteInventoryItem,
  updateInventoryItem
}