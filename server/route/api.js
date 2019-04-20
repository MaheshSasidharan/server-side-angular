const handlers = require("../handler");
const jwt = require("../jwt/jwt");

function setAPIRoute(app) {
    app.post('/api/user/authenticate', handlers.api.userAuth.userLogin);
}

module.exports = setAPIRoute;