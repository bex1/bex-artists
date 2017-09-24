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
var common_1 = require("../../../common");
var ArtistsController = (function (_super) {
    __extends(ArtistsController, _super);
    function ArtistsController(artistsService) {
        var _this = _super.call(this) || this;
        _this.artistsService = artistsService;
        return _this;
    }
    ArtistsController.prototype.get = function (req, res, next) {
        return this.respond(res, req.artist);
    };
    ArtistsController.prototype.resolveArtist = function (req, res, next, id) {
        var _this = this;
        return this.artistsService.get(id)
            .then(function (artist) {
            _this.validateResourceFound(artist);
            req.artist = artist;
            next();
        });
    };
    ArtistsController.LOGGER = common_1.LoggerFactory.getLogger();
    return ArtistsController;
}(common_1.RestController));
exports.ArtistsController = ArtistsController;
//# sourceMappingURL=artists-controller.js.map