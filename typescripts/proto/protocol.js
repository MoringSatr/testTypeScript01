/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.awesomepackage = function () {

    /**
     * Namespace awesomepackage.
     * @exports awesomepackage
     * @namespace
     */
    var awesomepackage = {};

    awesomepackage.AwesomeMessage = function () {

        /**
         * Properties of an AwesomeMessage.
         * @memberof awesomepackage
         * @interface IAwesomeMessage
         * @property {string|null} [awesomeField] AwesomeMessage awesomeField
         */

        /**
         * Constructs a new AwesomeMessage.
         * @memberof awesomepackage
         * @classdesc Represents an AwesomeMessage.
         * @implements IAwesomeMessage
         * @constructor
         * @param {awesomepackage.IAwesomeMessage=} [properties] Properties to set
         */
        function AwesomeMessage(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * AwesomeMessage awesomeField.
         * @member {string} awesomeField
         * @memberof awesomepackage.AwesomeMessage
         * @GlobalInstance
         */
        AwesomeMessage.prototype.awesomeField = "";

        /**
         * Creates a new AwesomeMessage GlobalInstance using the specified properties.
         * @function create
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {awesomepackage.IAwesomeMessage=} [properties] Properties to set
         * @returns {awesomepackage.AwesomeMessage} AwesomeMessage GlobalInstance
         */
        AwesomeMessage.create = function create(properties) {
            return new AwesomeMessage(properties);
        };

        /**
         * Encodes the specified AwesomeMessage message. Does not implicitly {@link awesomepackage.AwesomeMessage.verify|verify} messages.
         * @function encode
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {awesomepackage.IAwesomeMessage} message AwesomeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwesomeMessage.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.awesomeField != null && message.hasOwnProperty("awesomeField")) writer.uint32( /* id 1, wireType 2 =*/10).string(message.awesomeField);
            return writer;
        };

        /**
         * Encodes the specified AwesomeMessage message, length delimited. Does not implicitly {@link awesomepackage.AwesomeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {awesomepackage.IAwesomeMessage} message AwesomeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwesomeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwesomeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awesomepackage.AwesomeMessage} AwesomeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwesomeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.awesomepackage.AwesomeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.awesomeField = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwesomeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awesomepackage.AwesomeMessage} AwesomeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwesomeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwesomeMessage message.
         * @function verify
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwesomeMessage.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null) return "object expected";
            if (message.awesomeField != null && message.hasOwnProperty("awesomeField")) if (!$util.isString(message.awesomeField)) return "awesomeField: string expected";
            return null;
        };

        /**
         * Creates an AwesomeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awesomepackage.AwesomeMessage} AwesomeMessage
         */
        AwesomeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.awesomepackage.AwesomeMessage) return object;
            var message = new $root.awesomepackage.AwesomeMessage();
            if (object.awesomeField != null) message.awesomeField = String(object.awesomeField);
            return message;
        };

        /**
         * Creates a plain object from an AwesomeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awesomepackage.AwesomeMessage
         * @static
         * @param {awesomepackage.AwesomeMessage} message AwesomeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwesomeMessage.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) object.awesomeField = "";
            if (message.awesomeField != null && message.hasOwnProperty("awesomeField")) object.awesomeField = message.awesomeField;
            return object;
        };

        /**
         * Converts this AwesomeMessage to JSON.
         * @function toJSON
         * @memberof awesomepackage.AwesomeMessage
         * @GlobalInstance
         * @returns {Object.<string,*>} JSON object
         */
        AwesomeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AwesomeMessage;
    }();

    return awesomepackage;
}();

$root.DogProto = function () {

    /**
     * Namespace DogProto.
     * @exports DogProto
     * @namespace
     */
    var DogProto = {};

    DogProto.Dog = function () {

        /**
         * Properties of a Dog.
         * @memberof DogProto
         * @interface IDog
         * @property {string|null} [name] Dog name
         * @property {number|null} [age] Dog age
         */

        /**
         * Constructs a new Dog.
         * @memberof DogProto
         * @classdesc 狗
         * @implements IDog
         * @constructor
         * @param {DogProto.IDog=} [properties] Properties to set
         */
        function Dog(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Dog name.
         * @member {string} name
         * @memberof DogProto.Dog
         * @GlobalInstance
         */
        Dog.prototype.name = "";

        /**
         * Dog age.
         * @member {number} age
         * @memberof DogProto.Dog
         * @GlobalInstance
         */
        Dog.prototype.age = 0;

        /**
         * Creates a new Dog GlobalInstance using the specified properties.
         * @function create
         * @memberof DogProto.Dog
         * @static
         * @param {DogProto.IDog=} [properties] Properties to set
         * @returns {DogProto.Dog} Dog GlobalInstance
         */
        Dog.create = function create(properties) {
            return new Dog(properties);
        };

        /**
         * Encodes the specified Dog message. Does not implicitly {@link DogProto.Dog.verify|verify} messages.
         * @function encode
         * @memberof DogProto.Dog
         * @static
         * @param {DogProto.IDog} message Dog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dog.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name")) writer.uint32( /* id 1, wireType 2 =*/10).string(message.name);
            if (message.age != null && message.hasOwnProperty("age")) writer.uint32( /* id 2, wireType 0 =*/16).int32(message.age);
            return writer;
        };

        /**
         * Encodes the specified Dog message, length delimited. Does not implicitly {@link DogProto.Dog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DogProto.Dog
         * @static
         * @param {DogProto.IDog} message Dog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Dog message from the specified reader or buffer.
         * @function decode
         * @memberof DogProto.Dog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DogProto.Dog} Dog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.DogProto.Dog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.age = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a Dog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DogProto.Dog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DogProto.Dog} Dog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Dog message.
         * @function verify
         * @memberof DogProto.Dog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Dog.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null) return "object expected";
            if (message.name != null && message.hasOwnProperty("name")) if (!$util.isString(message.name)) return "name: string expected";
            if (message.age != null && message.hasOwnProperty("age")) if (!$util.isInteger(message.age)) return "age: integer expected";
            return null;
        };

        /**
         * Creates a Dog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DogProto.Dog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DogProto.Dog} Dog
         */
        Dog.fromObject = function fromObject(object) {
            if (object instanceof $root.DogProto.Dog) return object;
            var message = new $root.DogProto.Dog();
            if (object.name != null) message.name = String(object.name);
            if (object.age != null) message.age = object.age | 0;
            return message;
        };

        /**
         * Creates a plain object from a Dog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DogProto.Dog
         * @static
         * @param {DogProto.Dog} message Dog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Dog.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.age = 0;
            }
            if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
            if (message.age != null && message.hasOwnProperty("age")) object.age = message.age;
            return object;
        };

        /**
         * Converts this Dog to JSON.
         * @function toJSON
         * @memberof DogProto.Dog
         * @GlobalInstance
         * @returns {Object.<string,*>} JSON object
         */
        Dog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Dog;
    }();

    return DogProto;
}();

$root.MessageProto = function () {

    /**
     * Namespace MessageProto.
     * @exports MessageProto
     * @namespace
     */
    var MessageProto = {};

    MessageProto.Message = function () {

        /**
         * Properties of a Message.
         * @memberof MessageProto
         * @interface IMessage
         * @property {number|null} [cmd] Message cmd
         * @property {Uint8Array|null} [body] Message body
         */

        /**
         * Constructs a new Message.
         * @memberof MessageProto
         * @classdesc 通讯消息
         * @implements IMessage
         * @constructor
         * @param {MessageProto.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Message cmd.
         * @member {number} cmd
         * @memberof MessageProto.Message
         * @GlobalInstance
         */
        Message.prototype.cmd = 0;

        /**
         * Message body.
         * @member {Uint8Array} body
         * @memberof MessageProto.Message
         * @GlobalInstance
         */
        Message.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new Message GlobalInstance using the specified properties.
         * @function create
         * @memberof MessageProto.Message
         * @static
         * @param {MessageProto.IMessage=} [properties] Properties to set
         * @returns {MessageProto.Message} Message GlobalInstance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link MessageProto.Message.verify|verify} messages.
         * @function encode
         * @memberof MessageProto.Message
         * @static
         * @param {MessageProto.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd")) writer.uint32( /* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.body != null && message.hasOwnProperty("body")) writer.uint32( /* id 2, wireType 2 =*/18).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link MessageProto.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MessageProto.Message
         * @static
         * @param {MessageProto.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof MessageProto.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MessageProto.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.MessageProto.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.cmd = reader.int32();
                        break;
                    case 2:
                        message.body = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MessageProto.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MessageProto.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof MessageProto.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null) return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd")) if (!$util.isInteger(message.cmd)) return "cmd: integer expected";
            if (message.body != null && message.hasOwnProperty("body")) if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body))) return "body: buffer expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MessageProto.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MessageProto.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.MessageProto.Message) return object;
            var message = new $root.MessageProto.Message();
            if (object.cmd != null) message.cmd = object.cmd | 0;
            if (object.body != null) if (typeof object.body === "string") $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);else if (object.body.length) message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MessageProto.Message
         * @static
         * @param {MessageProto.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = 0;
                object.body = options.bytes === String ? "" : [];
            }
            if (message.cmd != null && message.hasOwnProperty("cmd")) object.cmd = message.cmd;
            if (message.body != null && message.hasOwnProperty("body")) object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof MessageProto.Message
         * @GlobalInstance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    }();

    MessageProto.Text = function () {

        /**
         * Properties of a Text.
         * @memberof MessageProto
         * @interface IText
         * @property {string|null} [id] Text id
         * @property {string|null} [message] Text message
         */

        /**
         * Constructs a new Text.
         * @memberof MessageProto
         * @classdesc Represents a Text.
         * @implements IText
         * @constructor
         * @param {MessageProto.IText=} [properties] Properties to set
         */
        function Text(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
        }

        /**
         * Text id.
         * @member {string} id
         * @memberof MessageProto.Text
         * @GlobalInstance
         */
        Text.prototype.id = "";

        /**
         * Text message.
         * @member {string} message
         * @memberof MessageProto.Text
         * @GlobalInstance
         */
        Text.prototype.message = "";

        /**
         * Creates a new Text GlobalInstance using the specified properties.
         * @function create
         * @memberof MessageProto.Text
         * @static
         * @param {MessageProto.IText=} [properties] Properties to set
         * @returns {MessageProto.Text} Text GlobalInstance
         */
        Text.create = function create(properties) {
            return new Text(properties);
        };

        /**
         * Encodes the specified Text message. Does not implicitly {@link MessageProto.Text.verify|verify} messages.
         * @function encode
         * @memberof MessageProto.Text
         * @static
         * @param {MessageProto.IText} message Text message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Text.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id")) writer.uint32( /* id 1, wireType 2 =*/10).string(message.id);
            if (message.message != null && message.hasOwnProperty("message")) writer.uint32( /* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified Text message, length delimited. Does not implicitly {@link MessageProto.Text.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MessageProto.Text
         * @static
         * @param {MessageProto.IText} message Text message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Text.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Text message from the specified reader or buffer.
         * @function decode
         * @memberof MessageProto.Text
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MessageProto.Text} Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Text.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.MessageProto.Text();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a Text message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MessageProto.Text
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MessageProto.Text} Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Text.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Text message.
         * @function verify
         * @memberof MessageProto.Text
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Text.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null) return "object expected";
            if (message.id != null && message.hasOwnProperty("id")) if (!$util.isString(message.id)) return "id: string expected";
            if (message.message != null && message.hasOwnProperty("message")) if (!$util.isString(message.message)) return "message: string expected";
            return null;
        };

        /**
         * Creates a Text message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MessageProto.Text
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MessageProto.Text} Text
         */
        Text.fromObject = function fromObject(object) {
            if (object instanceof $root.MessageProto.Text) return object;
            var message = new $root.MessageProto.Text();
            if (object.id != null) message.id = String(object.id);
            if (object.message != null) message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a Text message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MessageProto.Text
         * @static
         * @param {MessageProto.Text} message Text
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Text.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.message = "";
            }
            if (message.id != null && message.hasOwnProperty("id")) object.id = message.id;
            if (message.message != null && message.hasOwnProperty("message")) object.message = message.message;
            return object;
        };

        /**
         * Converts this Text to JSON.
         * @function toJSON
         * @memberof MessageProto.Text
         * @GlobalInstance
         * @returns {Object.<string,*>} JSON object
         */
        Text.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Text;
    }();

    return MessageProto;
}();

module.exports = $root;
