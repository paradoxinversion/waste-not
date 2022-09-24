/**
 * Return an object containig application configuration.
 * @returns 
 */
const config = () =>
    (() => {
        return {
            application: {
                port: process.env.APP_PORT,
                sessionSecret: process.env.EXPRESS_SESSION_SECRET
            },
            database: {
                port: process.env.DB_PORT
            }
        }
    })();

module.exports = config
