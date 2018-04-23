import * as $protobuf from "protobufjs";

/** Namespace awesomepackage. */
export namespace awesomepackage {

    /** Properties of an AwesomeMessage. */
    interface IAwesomeMessage {

        /** AwesomeMessage awesomeField */
        awesomeField?: (string|null);
    }

    /** Represents an AwesomeMessage. */
    class AwesomeMessage implements IAwesomeMessage {

        /**
         * Constructs a new AwesomeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: awesomepackage.IAwesomeMessage);

        /** AwesomeMessage awesomeField. */
        public awesomeField: string;

        /**
         * Creates a new AwesomeMessage GlobalInstance using the specified properties.
         * @param [properties] Properties to set
         * @returns AwesomeMessage GlobalInstance
         */
        public static create(properties?: awesomepackage.IAwesomeMessage): awesomepackage.AwesomeMessage;

        /**
         * Encodes the specified AwesomeMessage message. Does not implicitly {@link awesomepackage.AwesomeMessage.verify|verify} messages.
         * @param message AwesomeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awesomepackage.IAwesomeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AwesomeMessage message, length delimited. Does not implicitly {@link awesomepackage.AwesomeMessage.verify|verify} messages.
         * @param message AwesomeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awesomepackage.IAwesomeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AwesomeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AwesomeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awesomepackage.AwesomeMessage;

        /**
         * Decodes an AwesomeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AwesomeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awesomepackage.AwesomeMessage;

        /**
         * Verifies an AwesomeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AwesomeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AwesomeMessage
         */
        public static fromObject(object: { [k: string]: any }): awesomepackage.AwesomeMessage;

        /**
         * Creates a plain object from an AwesomeMessage message. Also converts values to other types if specified.
         * @param message AwesomeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awesomepackage.AwesomeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AwesomeMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace DogProto. */
export namespace DogProto {

    /** Properties of a Dog. */
    interface IDog {

        /** Dog name */
        name?: (string|null);

        /** Dog age */
        age?: (number|null);
    }

    /** 狗 */
    class Dog implements IDog {

        /**
         * Constructs a new Dog.
         * @param [properties] Properties to set
         */
        constructor(properties?: DogProto.IDog);

        /** Dog name. */
        public name: string;

        /** Dog age. */
        public age: number;

        /**
         * Creates a new Dog GlobalInstance using the specified properties.
         * @param [properties] Properties to set
         * @returns Dog GlobalInstance
         */
        public static create(properties?: DogProto.IDog): DogProto.Dog;

        /**
         * Encodes the specified Dog message. Does not implicitly {@link DogProto.Dog.verify|verify} messages.
         * @param message Dog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DogProto.IDog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Dog message, length delimited. Does not implicitly {@link DogProto.Dog.verify|verify} messages.
         * @param message Dog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DogProto.IDog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Dog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Dog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DogProto.Dog;

        /**
         * Decodes a Dog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Dog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DogProto.Dog;

        /**
         * Verifies a Dog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Dog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Dog
         */
        public static fromObject(object: { [k: string]: any }): DogProto.Dog;

        /**
         * Creates a plain object from a Dog message. Also converts values to other types if specified.
         * @param message Dog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DogProto.Dog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Dog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace MessageProto. */
export namespace MessageProto {

    /** Properties of a Message. */
    interface IMessage {

        /** Message cmd */
        cmd?: (number|null);

        /** Message body */
        body?: (Uint8Array|null);
    }

    /** 通讯消息 */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: MessageProto.IMessage);

        /** Message cmd. */
        public cmd: number;

        /** Message body. */
        public body: Uint8Array;

        /**
         * Creates a new Message GlobalInstance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message GlobalInstance
         */
        public static create(properties?: MessageProto.IMessage): MessageProto.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link MessageProto.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MessageProto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link MessageProto.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MessageProto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageProto.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MessageProto.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): MessageProto.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MessageProto.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Text. */
    interface IText {

        /** Text id */
        id?: (string|null);

        /** Text message */
        message?: (string|null);
    }

    /** Represents a Text. */
    class Text implements IText {

        /**
         * Constructs a new Text.
         * @param [properties] Properties to set
         */
        constructor(properties?: MessageProto.IText);

        /** Text id. */
        public id: string;

        /** Text message. */
        public message: string;

        /**
         * Creates a new Text GlobalInstance using the specified properties.
         * @param [properties] Properties to set
         * @returns Text GlobalInstance
         */
        public static create(properties?: MessageProto.IText): MessageProto.Text;

        /**
         * Encodes the specified Text message. Does not implicitly {@link MessageProto.Text.verify|verify} messages.
         * @param message Text message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MessageProto.IText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Text message, length delimited. Does not implicitly {@link MessageProto.Text.verify|verify} messages.
         * @param message Text message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MessageProto.IText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Text message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageProto.Text;

        /**
         * Decodes a Text message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MessageProto.Text;

        /**
         * Verifies a Text message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Text message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Text
         */
        public static fromObject(object: { [k: string]: any }): MessageProto.Text;

        /**
         * Creates a plain object from a Text message. Also converts values to other types if specified.
         * @param message Text
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MessageProto.Text, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Text to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
