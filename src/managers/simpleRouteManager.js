var baseRouteManager = require("./baseRouteManager");

class simpleRouteManager extends baseRouteManager {

    constructor(webManager,logger) {
        super(logger);
        this.webManager = webManager;
    }

    start(config) {
        this.logger.log("Simple Route Manager Started");
        this.webManager.start(config);
    }
}

module.exports = simpleRouteManager;