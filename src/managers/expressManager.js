var webManager = require("./webManager");

class expressManager extends webManager {
    constructor(logger) {
        super(logger);
        var express = require('express');
        this.app = express();
    }

    start(config) {
        super.start();
        {var port} config;
        app.listen(port, function() {
            this.logger.log("Express Started");
        });
    }

    addRoute(obj) {
        super.addRoute(obj);
        try {
            {var uri} obj;
            {var method} obj;
            {var handler} obj;
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