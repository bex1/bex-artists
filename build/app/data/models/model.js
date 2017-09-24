"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model(id) {
        this.id = id;
        this.id = id;
    }
    Model.prototype.set = function (data) {
        if (data == null) {
            return null;
        }
        for (var key in data) {
            if (this.hasOwnProperty(key) && key !== 'id') {
                this[key] = data[key];
            }
        }
    };
    Model.prototype.isNew = function () {
        return this.id == null;
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map