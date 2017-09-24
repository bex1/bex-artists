"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var AppConfig = (function () {
    function AppConfig(environment) {
        this.environment = environment;
        this.port = this.getIntegerEnvVar('PORT');
        this.logLevel = this.getStringEnvVar('LOG_LEVEL');
        this.serveStatic = this.getBooleanEnvVar('SERVE_STATIC');
        this.enableHttpRequestLogging = this.getBooleanEnvVar('ENABLE_HTTP_REQUEST_LOGGING', false);
    }
    AppConfig.prototype.getEnvironment = function () {
        return this.environment;
    };
    AppConfig.prototype.getBooleanEnvVar = function (variableName, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var value = this.getEnvVar(variableName, defaultValue);
        var errorMessage = "Environment Variable " + variableName + " does not contain a valid boolean";
        return utils_1.StringUtils.parseBoolean(value, errorMessage);
    };
    AppConfig.prototype.getIntegerEnvVar = function (variableName, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var value = this.getEnvVar(variableName, defaultValue);
        var errorMessage = "Environment Variable " + variableName + " does not contain a valid integer";
        return utils_1.StringUtils.parseInt(value, errorMessage);
    };
    AppConfig.prototype.getStringEnvVar = function (variableName, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return this.getEnvVar(variableName, defaultValue);
    };
    AppConfig.prototype.getEnvVar = function (variableName, defaultValue) {
        var value = this.environment[variableName] || defaultValue;
        if (value == null) {
            throw new Error("Environment Variable " + variableName + " must be set!");
        }
        return value;
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=app-config.js.map