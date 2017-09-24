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
var artists_controller_1 = require("./artists-controller");
var ArtistsRouter = (function (_super) {
    __extends(ArtistsRouter, _super);
    function ArtistsRouter(artistsService) {
        var _this = _super.call(this) || this;
        _this.artistsCtrl = new artists_controller_1.ArtistsController(artistsService);
        _this.initRoutes();
        return _this;
    }
    ArtistsRouter.prototype.initRoutes = function () {
        this.router.param('id', this.resolveParam(this.artistsCtrl, this.artistsCtrl.resolveArtist));
        this.router.get('/:id', this.resolveRoute(this.artistsCtrl, this.artistsCtrl.get));
        this.router.delete('/:id', this.resolveRoute(this.artistsCtrl, this.artistsCtrl.throwMethodNotAllowedError));
        this.router.patch('/:id', this.resolveRoute(this.artistsCtrl, this.artistsCtrl.throwMethodNotAllowedError));
        this.router.all('/:id', this.resolveRoute(this.artistsCtrl, this.artistsCtrl.throwMethodNotAllowedError));
    };
    return ArtistsRouter;
}(common_1.RestRouter));
exports.ArtistsRouter = ArtistsRouter;
//# sourceMappingURL=artists-router.js.map