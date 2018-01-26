describe("Testing Main Class", function() {
    var main = require("../main");
    var baseRouteManager = require("../src/managers/baseRouteManager");
    var instance;
    
    class testManager extends baseRouteManager {
        constructor() {
            super()
        }
        start() {
            console.log(" Method start was invoke.");
        }
    }

    beforeEach(function() {
        instance = new testManager();
        spyOn(instance, 'start');
        new main(instance);
    });
  
    it("Stating router module", function() {
        expect(instance.start).toHaveBeenCalled();        
    });
});