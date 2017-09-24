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
var model_1 = require("./model");
var album_1 = require("./album");
var Artist = (function (_super) {
    __extends(Artist, _super);
    function Artist(data) {
        var _this = _super.call(this, data.id) || this;
        _this.description = data.description;
        data.albums = data.albums || [];
        _this.albums = data.albums.map(function (albumData) { return new album_1.Album(albumData); });
        return _this;
    }
    return Artist;
}(model_1.Model));
exports.Artist = Artist;
//# sourceMappingURL=artist.js.map