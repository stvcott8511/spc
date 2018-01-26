class webManager {
    constructor(logger) {
        this.logger = logger;
    }
    start() {
        const info = "Web Manager Started";
        this.logger.log(info);
    }
    addRoute(obj) {
        this.logger.log(obj);
        console.log(obj);
    }
}

module.exports = webManager;