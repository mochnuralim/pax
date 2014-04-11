module.exports = function(logger) {
    "use strict";

    logger.log("Available tasks:".yellow);
    for(var i in this.tasks) {
        logger.log(i.blue.bold, this.tasks[i].description);
    }

    return this.tasks;
};