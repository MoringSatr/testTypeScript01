"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protocol_1 = require("./proto/protocol");
var Message = protocol_1.MessageProto.Message;
var Constant_1 = require("./Constant");
var ByteBufferUtil_1 = require("./util/ByteBufferUtil");
var SocketUtil = /** @class */ (function () {
    function SocketUtil() {
    }
    SocketUtil.prototype.connect = function () {
        var _this = this;
        this.socket = io.connect(Constant_1.default.SOCKET_URL);
        this.socket.on('connect', function () {
            _this.onConnect();
        });
        this.socket.on("message", function (msg) {
            _this.onMessage(msg);
        });
        this.socket.on('disconnect', function () {
            _this.onDisconnect();
        });
    };
    SocketUtil.prototype.sendMessage = function (message) {
        var messageBuf = Message.encode(message).finish();
        var buffer = ByteBufferUtil_1.default.uint8ArrayToArrayBuffer(messageBuf);
        this.socket.send(buffer);
    };
    SocketUtil.prototype.onConnect = function () {
    };
    SocketUtil.prototype.onMessage = function (msg) {
    };
    SocketUtil.prototype.onDisconnect = function () {
    };
    SocketUtil.prototype.addHandler = function (handler) {
    };
    return SocketUtil;
}());
exports.default = SocketUtil;
