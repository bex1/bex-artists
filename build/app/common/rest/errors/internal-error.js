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
var InternalError = (function (_super) {
    __extends(InternalError, _super);
    function InternalError(originalError, message) {
        if (message === void 0) { message = 'An unexpected error has occurred.'; }
        var _this = _super.call(this, message, 500, 'INTERNAL_ERROR') || this;
        _this.originalError = originalError;
        _this.message = message;
        _this.name = 'InternalError';
        return _this;
    }
    return InternalError;
}(rest_error_1.RestError));
exports.InternalError = InternalError;
//# sourceMappingURL=internal-error.js.map