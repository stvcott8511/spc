var routeManager = require("./src/managers/simpleRouteManager");
var httpManager = require("./src/managers/expressManager");

// TODO add test routes

router = new routeManager(new httpManager(console), console);
router.start({port:8080});