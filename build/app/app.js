"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/library");
var common_1 = require("./common");
var config_1 = require("./config");
var data_1 = require("./data");
var express_app_factory_1 = require("./express-app-factory");
var api_1 = require("./api");
var common_2 = require("./common");
var LOGGER = common_1.LoggerFactory.getLogger();
var appConfig = new config_1.AppConfig(process.env);
var appServices = new data_1.AppDataServices();
var apiRouter = api_1.ApiRouterFactory.getApiRouter(appServices);
var errorMiddleware = [
    common_2.RestErrorMiddleware.normalizeToRestError,
    common_2.RestErrorMiddleware.serializeRestError
];
var app = express_app_factory_1.ExpressAppFactory.getExpressApp(appConfig, apiRouter, null, errorMiddleware);
app.listen(appConfig.port, function () {
    LOGGER.info("Express server listening on port " + appConfig.port);
});
//# sourceMappingURL=app.js.map