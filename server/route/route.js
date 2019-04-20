const handlers = require("../handler");
const jwt = require("../jwt/jwt");

function pageRoute(app){
    app.post('/login', handlers.loginHandler);
    app.get('/home', jwt.checkToken, handlers.homeHandler);
}

module.exports = pageRoute;