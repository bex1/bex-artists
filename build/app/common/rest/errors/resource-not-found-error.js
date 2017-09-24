"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rest_error_1 = require("./rest-error");
var ResourceNotFoundError = (function (_super) {
    __extends(ResourceNotFoundError, _super);
    function ResourceNotFoundError(message) {
        if (message === void 0) { message = 'The resource could not be found.'; }
        var _this = _super.call(this, message, 404, 'RESOURCE_NOT_FOUND') || this;
        _this.message = message;
        _this.name = 'ResourceNotFoundError';
        return _this;
    }
    return ResourceNotFoundError;
}(rest_error_1.RestError));
exports.ResourceNotFoundError = ResourceNotFoundError;
//# sourceMappingURL=resource-not-found-error.js.map