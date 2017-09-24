"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest_response_1 = require("./rest-response");
var errors_1 = require("./errors");
var RestController = (function () {
    function RestController() {
    }
    RestController.prototype.respond = function (res, item, statusCode) {
        if (statusCode === void 0) { statusCode = 200; }
        var response = new rest_response_1.RestResponse(item);
        return res.status(statusCode).json(response);
    };
    RestController.prototype.respondNoContent = function (res, statusCode) {
        if (statusCode === void 0) { statusCode = 204; }
        return res.status(statusCode).json();
    };
    RestController.prototype.validateResourceFound = function (item) {
        if (item == null) {
            throw new errors_1.ResourceNotFoundError();
        }
    };
    RestController.prototype.throwMethodNotAllowedError = function (req, res, next) {
        throw new errors_1.MethodNotAllowedError();
    };
    return RestController;
}());
exports.RestController = RestController;
//# sourceMappingURL=rest-controller.js.map