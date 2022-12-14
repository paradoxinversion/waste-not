/**
 * Return an object containig application configuration.
 * @returns 
 */
const config = () =>
    (() => {
        return {
            application: {
                port: process.env.APP_PORT,
                sessionSecret: process.env.EXPRESS_SESSION_SECRET,
                singleUserInstance: process.env.SINGLE_USER_INSTANCE
            },
            database: {
                port: process.env.DB_PORT,
                mongodb_connection_string: !!process.env.LOCAL_INSTANCE ? process.env.MONGODB_CONNSTRING_LOCAL_INSTANCE : process.env.MONGODB_CONNSTRING
            }
        }
    })();

module.exports = config
