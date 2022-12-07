import mongoose, { mongo } from "mongoose";
import { createInventoryItem } from "../src/actions/inventoryItems";
import InventoryItem from "../src/db/schema/inventoryItem";
import { addDays } from "./helpers";
beforeEach(async () => {
    await mongoose.connect("mongodb://localhost:27017/waste-not-test");
    // const inventoryItem = new InventoryItem({
    //     name: "Test Food Item",
    //     purchaseDate: ,
    //     expirationDate,
    //     useOrFreezeDate,
    //     foodType,
    //     opened,
    //     used,
    //     notes
    //   });
    
    //   await inventoryItem.save();
});

afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();

});

describe("actions", ()=>{
    describe("inventoryItems", () => {
        test("createInventoryItem", async () => {
            const now = new Date();
            const inventoryItemData = {
                name: "Test Item",
                purchaseDate: now,
                expirationDate: addDays(now, 7),
                useOrFreezeDate: addDays(now, 7),
                opened: false,
                used: false,
                notes: "A test item" 
            }

            const result = await createInventoryItem(inventoryItemData);
            expect(result).toMatchObject(inventoryItemData);
        });

        test()
    });
});