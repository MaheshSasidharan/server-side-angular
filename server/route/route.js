const handlers = require("../handler");
const jwt = require("../jwt/jwt");

function pageRoute(app){
    app.get('/home', jwt.checkToken, handlers.homeHandler);
}

module.exports = pageRoute;