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
var BadRequestError = (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(message) {
        if (message === void 0) { message = 'The request cannot be fulfilled due to bad syntax.'; }
        var _this = _super.call(this, message, 400, 'BAD_REQUEST') || this;
        _this.message = message;
        _this.name = 'BadRequestError';
        return _this;
    }
    return BadRequestError;
}(rest_error_1.RestError));
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=bad-request-error.js.map