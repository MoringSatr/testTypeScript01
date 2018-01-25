"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Panel = /** @class */ (function () {
    function Panel() {
        this.isShow = false;
        this.load();
    }
    Panel.prototype.load = function () {
        var _this = this;
        cc.log("Panel load ...");
        cc.loader.loadRes("prefab/panel", cc.Prefab, function (error, prefab) {
            if (prefab == null) {
                return;
            }
            _this.panel = prefab;
        });
    };
    Panel.prototype.show = function (x, y, node) {
        if (this.panel == null) {
            return;
        }
        if (this.isShow) {
            return;
        }
        cc.log("panel " + this.panel);
        cc.log("Panel show ...");
        this.panel.data.setPosition(x, y);
        this.panel.data.active = true;
        cc.log("Panel name " + this.panel.name);
        node.addChild(this.panel.data);
        this.isShow = true;
    };
    Panel.prototype.hide = function (node) {
        if (this.panel == null) {
            return;
        }
        if (!this.isShow) {
            return;
        }
        node.removeChild(this.panel.data);
        this.panel.data.active = false;
        this.isShow = false;
    };
    return Panel;
}());
exports.default = Panel;
