import {MessageProto} from "./proto/protocol";
import Message = MessageProto.Message;
import Constant from "./Constant";
import ByteBufferUtil from "./util/ByteBufferUtil";


export default class SocketUtil {

    private socket;

    private handlers;

    constructor() {
    }

    public connect(): void {
        this.socket = io.connect(Constant.SOCKET_URL);
        this.socket.on('connect', () => {
            this.onConnect();
        });

        this.socket.on(`message`, (msg) => {
            this.onMessage(msg);
        });

        this.socket.on('disconnect', () => {
            this.onDisconnect();
        });

    }

    public sendMessage(message: Message) {
        let messageBuf = Message.encode(message).finish();
        let buffer: ArrayBuffer = ByteBufferUtil.uint8ArrayToArrayBuffer(messageBuf);
        this.socket.send(buffer);
    }

    private onConnect(): void {

    }

    private onMessage(msg): void {

    }

    private onDisconnect(): void {

    }

    public addHandler(handler: Function): void {
    }

}