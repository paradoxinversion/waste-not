
const config = () =>
    (() => {
        return {
            application: {
                port: process.env.APP_PORT
            },
            database: {
                port: process.env.DB_PORT
            }
        }
    })();

module.exports = config
