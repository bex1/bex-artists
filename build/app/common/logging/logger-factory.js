"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var LoggerFactory = (function () {
    function LoggerFactory() {
    }
    LoggerFactory.getLogger = function () {
        if (!LoggerFactory.logger) {
            var logLevel = process.env['LOG_LEVEL'];
            LoggerFactory.logger = new winston.Logger({
                transports: [
                    new (winston.transports.Console)({ level: logLevel, raw: true })
                ]
            });
        }
        return LoggerFactory.logger;
    };
    return LoggerFactory;
}());
exports.LoggerFactory = LoggerFactory;
//# sourceMappingURL=logger-factory.js.map