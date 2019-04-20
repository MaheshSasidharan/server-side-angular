const apiRoute = require("./api");
const pageRoute = require("./route");

const setRoute = (app) => {
    apiRoute(app);
    pageRoute(app);
}

module.exports = setRoute;