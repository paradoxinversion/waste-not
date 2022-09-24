/**
 * A user in the database
 * @typedef {Object} User
 * @property {String} username
 * @property {String} password
 */

/**
 * Inventory Items are the core of Waste Note. Inventory Items are assumed to be perishable, but are not required to be.
 * @typedef {Object} User
 * @property {String} name - The name of the item.
 * @property {Date} purchaseDate - The date the item was purchased
 * @property {Date} expirationDate - The listed expiration date on the item. Can be left blank if no expiration date can be found.
 * @property {Date} useOrFreezeDate - The listed "use or freeze" date on the item.
 * @property {String} foodType - A string representing what the type of item is.
 * @property {Boolean} expiryAlertDispatched - A boolean representing whether or not an expiry alert has been dispatched. The checkExpiry job is responsible for setting this field after successfully dispatching an alert
 */