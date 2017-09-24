"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var RestRouter = (function () {
    function RestRouter() {
        this.router = express.Router();
    }
    RestRouter.prototype.resolveParam = function (controller, handlerFn) {
        return function (req, res, next, param) {
            return Promise.resolve(handlerFn.bind(controller)(req, res, next, param))
                .catch(function (err) { return next(err); });
        };
    };
    RestRouter.prototype.resolveRoute = function (controller, handlerFn) {
        return function (req, res, next) {
            return Promise.resolve(handlerFn.bind(controller)(req, res, next))
                .catch(function (err) { return next(err); });
        };
    };
    return RestRouter;
}());
exports.RestRouter = RestRouter;
//# sourceMappingURL=rest-router.js.map