var baseRouteManager = require("./baseRouteManager");

class simpleRouteManager extends baseRouteManager {

    constructor(webManager,logger) {
        super();
        this.webManager = webManager;
        this.logger = logger;
    }

    start() {
        // this.configureRoutes();
        this.logger.log("simpleRouteManager start")
        this.webManager();
    }
}

module.exports = simpleRouteManager;