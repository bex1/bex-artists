"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializeError = require("serialize-error");
var errors_1 = require("../errors");
var logging_1 = require("../../logging");
var RestErrorMiddleware = (function () {
    function RestErrorMiddleware() {
    }
    RestErrorMiddleware.normalizeToRestError = function (err, req, res, next) {
        if (err.httpStatusCode) {
            return next(err);
        }
        if (err instanceof SyntaxError) {
            return next(new errors_1.InvalidJsonError());
        }
        if (err.statusCode) {
            return next(new errors_1.RestError(err.message, err.statusCode, err.message, err.name));
        }
        return next(new errors_1.InternalError(err));
    };
    RestErrorMiddleware.serializeRestError = function (err, req, res, next) {
        if (err instanceof errors_1.InternalError) {
            var logFriendlyErrorMessage = serializeError(err.originalError);
            RestErrorMiddleware.LOGGER.error(logFriendlyErrorMessage);
        }
        else {
            var logFriendlyErrorMessage = serializeError(err);
            RestErrorMiddleware.LOGGER.warn(logFriendlyErrorMessage);
        }
        return res.status(err.httpStatusCode).json({
            error: err
        });
    };
    RestErrorMiddleware.LOGGER = logging_1.LoggerFactory.getLogger();
    return RestErrorMiddleware;
}());
exports.RestErrorMiddleware = RestErrorMiddleware;
//# sourceMappingURL=rest-error-middleware.js.map