"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RestResponse = (function () {
    function RestResponse(data, error) {
        this.data = data;
        this.error = error;
        if (data != null && error != null) {
            throw new Error('An ApiResponse instance should only contain one of data or error');
        }
    }
    return RestResponse;
}());
exports.RestResponse = RestResponse;
//# sourceMappingURL=rest-response.js.map