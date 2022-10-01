const logRequest = (req, res, next) => {
    console.log("ping");
    next();
}

module.exports = logRequest;
