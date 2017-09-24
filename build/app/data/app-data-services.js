"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_services_1 = require("./data-services");
var AppDataServices = (function () {
    function AppDataServices() {
        this.initDataServices();
    }
    AppDataServices.prototype.initDataServices = function () {
        this.artistsService = new data_services_1.ImplArtistsService();
    };
    return AppDataServices;
}());
exports.AppDataServices = AppDataServices;
//# sourceMappingURL=app-data-services.js.map