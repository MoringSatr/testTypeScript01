"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Panel_1 = require("./Panel");
var SocketUtil_1 = require("./SocketUtil");
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.getInstance = function () {
        return this.instance;
    };
    Global.prototype.load = function () {
        this.Panel = new Panel_1.default();
        this.SocketUtil = new SocketUtil_1.default();
    };
    Global.instance = new Global();
    return Global;
}());
exports.default = Global;
