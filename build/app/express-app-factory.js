"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var common_1 = require("./common");
var ExpressAppFactory = (function () {
    function ExpressAppFactory() {
    }
    ExpressAppFactory.getExpressApp = function (appConfig, apiRouter, preApiRouterMiddlewareFns, postApiRouterMiddlewareFns) {
        var app = express();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        if (appConfig.serveStatic) {
            ExpressAppFactory.LOGGER.info("Serving static files from public");
            app.use(express.static('public'));
        }
        if (appConfig.enableHttpRequestLogging) {
            ExpressAppFactory.LOGGER.info("Request logging is enabled");
            app.use(morgan('combined'));
        }
        if (preApiRouterMiddlewareFns != null) {
            postApiRouterMiddlewareFns.forEach(function (middlewareFn) { return app.use(middlewareFn); });
        }
        app.use('/api', apiRouter);
        if (postApiRouterMiddlewareFns != null) {
            postApiRouterMiddlewareFns.forEach(function (middlewareFn) { return app.use(middlewareFn); });
        }
        return app;
    };
    ExpressAppFactory.LOGGER = common_1.LoggerFactory.getLogger();
    return ExpressAppFactory;
}());
exports.ExpressAppFactory = ExpressAppFactory;
//# sourceMappingURL=express-app-factory.js.map