const handlers = require("../handler");
const jwt = require("../jwt/jwt");

function setAPIRoute(app) {
    app.post('/api/user/authenticate', handlers.api.userAuth.userLogin);
    app.get('/api/getHomeData', jwt.checkToken, handlers.api.homeApi.getHomeData)
}

module.exports = setAPIRoute;