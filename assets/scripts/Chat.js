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
var Event1_1 = require("./even/Event1");
var Event2_1 = require("./even/Event2");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.input = null;
        _this.scrollview = null;
        _this.events = new Map();
        return _this;
    }
    Chat.prototype.start = function () {
        var map = new Map();
        map.set("qq", 11);
        map.set("qq1", 112);
        map.set("qq2", 111);
        map.set("qq", 22222);
        cc.log("map : " + map);
        map.forEach(function (value, key) {
            cc.log("mapStr  key:" + key + " , value:" + value);
        });
        var event1 = new Event1_1.default();
        var event2 = new Event2_1.default();
        this.events.set(event1.eventType, event1);
        this.events.set(event2.eventType, event2);
        this.events.forEach(function (event) {
            event.exc();
        });
    };
    Chat.prototype.sendMessage = function () {
    };
    __decorate([
        property(cc.EditBox)
    ], Chat.prototype, "input", void 0);
    __decorate([
        property(cc.ScrollView)
    ], Chat.prototype, "scrollview", void 0);
    Chat = __decorate([
        ccclass
    ], Chat);
    return Chat;
}(cc.Component));
exports.default = Chat;
