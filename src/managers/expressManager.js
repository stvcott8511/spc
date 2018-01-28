var webManager = require("./webManager");

class expressManager extends webManager {
    constructor(logger) {
        super(logger);
        var express = require('express');
        this.app = express();
    }

    start(config) {
        var _this = this;
        super.start();
        this.app.listen(config.port, function() {
            _this.logger.log("Express Started");
        });
    }

    addRoute(obj) {
        super.addRoute(obj);
        try {
            var uri = obj.uri;
            var method = obj.method;
            var handler = obj.handler;
            app[method](uri,function(req, res){
                var resObj = {
                    send: res.send,
                    sendStatusCode: function(code, data) {
                        res.status(code).send(data);
                    }
                }
                handler(req.data, resObj);
            });
        } catch (error) {
            logger.error(e);
        }
    }
}

module.exports = expressManager;