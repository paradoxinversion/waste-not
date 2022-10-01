const connect = require("../src/db/connect-db")
const InventoryItem = require("../src/db/schema/inventoryItem")


const checkExpiry = async () =>{
    try{
        connect();
        const inventory = await InventoryItem.find({expirationDate: {$lt: new Date(Date.now())}, expiryAlertDispatched: false});
        inventory.forEach(item => {
            console.log("Dispatching for " + item.name);
        })
    }catch(e){
        console.error(e);
    }
}

// checkExpiry()