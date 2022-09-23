const InventoryItem = require("../db/schema/inventoryItem");

const createInventoryItem = async ({name, purchaseDate, expirationDate, userOrFreezeDate, foodType}) => {
  const inventoryItem = new InventoryItem({
    name,
    purchaseDate,
    expirationDate,
    useOrFreezeDate,
    foodType,
  })

  await inventoryItem.save();
  return inventoryItem;
}

const readInventoryItem = async (inventoryItemID) => {
  try{
    
    const inventoryItem = InventoryItem.findById(inventoryItemID);
    if (!inventoryItem){
      throw new Error("Inventory Item does not exist")
    }
    console.log("Read Inventory Item: ", inventoryItem);
  
    return inventoryItem;
  }catch(e){
    throw e;
  }
}

const readInventoryItems = async () => {
  try{

    const inventoryItems = await InventoryItem.find({});
    console.log("Read Inventory Items: ", inventoryItems);

    return inventoryItems;
  }catch(e){
    throw e;
  }
}

const deleteInventoryItem = async (inventoryItemID) => {
  try{
    const result = await InventoryItem.findByIdAndDelete(inventoryItemID);
    console.log("Delete Inventory Item: ", result)
    return true;
  }catch(e){
    throw e;
  }
}

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

module.exports = {
  createInventoryItem,
  readInventoryItem,
  readInventoryItems,
  deleteInventoryItem,
  updateInventoryItem
}