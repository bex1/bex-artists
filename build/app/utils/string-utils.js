"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.isValidBoolean = function (value) {
        return (value === 'true' || value === 'false' || value === true || value === false);
    };
    StringUtils.isValidInteger = function (value) {
        var parsedInt = parseInt(value, 10);
        return !isNaN(parsedInt);
    };
    StringUtils.parseBoolean = function (value, errorMessage) {
        if (!StringUtils.isValidBoolean(value)) {
            var message = errorMessage || value + " is not a valid boolean!";
            throw new Error(message);
        }
        return StringUtils.convertStringToBoolean(value);
    };
    StringUtils.parseInt = function (value, errorMessage) {
        if (!StringUtils.isValidInteger(value)) {
            var message = errorMessage || value + " is not a valid int!";
            throw new Error(message);
        }
        return parseInt(value, 10);
    };
    StringUtils.convertStringToBoolean = function (value) {
        return value === 'true';
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
//# sourceMappingURL=string-utils.js.map