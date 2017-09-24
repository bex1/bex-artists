"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var artists_router_1 = require("./routes/artists/artists-router");
var common_1 = require("../common");
var ApiRouterFactory = (function () {
    function ApiRouterFactory() {
    }
    ApiRouterFactory.getApiRouter = function (services) {
        var router = express.Router();
        var artistsRouter = new artists_router_1.ArtistsRouter(services.artistsService).router;
        ApiRouterFactory.LOGGER.info('Mounting artists route');
        router.use('/artists', artistsRouter);
        router.all('*', function (req, res, next) {
            next(new common_1.InvalidResourceUrlError());
        });
        return router;
    };
    ApiRouterFactory.LOGGER = common_1.LoggerFactory.getLogger();
    return ApiRouterFactory;
}());
exports.ApiRouterFactory = ApiRouterFactory;
//# sourceMappingURL=api-router-factory.js.map