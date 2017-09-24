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
var RestError = (function (_super) {
    __extends(RestError, _super);
    function RestError(message, httpStatusCode, code, name) {
        if (name === void 0) { name = 'RestError'; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.httpStatusCode = httpStatusCode;
        _this.code = code;
        _this.stack = new Error().stack;
        return _this;
    }
    return RestError;
}(Error));
exports.RestError = RestError;
//# sourceMappingURL=rest-error.js.map