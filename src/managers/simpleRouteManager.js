var baseRouteManager = require("./baseRouteManager");

class simpleRouteManager extends baseRouteManager {

    constructor(webManager,logger) {
        super();
        this.webManager = webManager;
        this.logger = logger;
    }

    start(config) {
        this.logger.log("Simple Route Manager Started");
        this.webManager.start(config);
    }
}

module.exports = simpleRouteManager;