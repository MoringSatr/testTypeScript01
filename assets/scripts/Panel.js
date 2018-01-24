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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panel = null;
        return _this;
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
    Panel.prototype.show = function (x, y) {
        if (this.panel == null) {
            return;
        }
        cc.log("panel " + this.panel);
        cc.log("Panel show ...");
        this.panel.data.setPosition(x, y);
        this.panel.data.active = true;
        cc.log("Panel name " + this.panel.name);
    };
    Panel.prototype.hide = function () {
        if (this.panel == null) {
            return;
        }
        this.panel.data.active = false;
    };
    __decorate([
        property(cc.Prefab)
    ], Panel.prototype, "panel", void 0);
    Panel = __decorate([
        ccclass
    ], Panel);
    return Panel;
}(cc.Component));
exports.default = Panel;
