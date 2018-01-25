import {MessageProto} from "./proto/protocol";
import Message = MessageProto.Message;
import Constant from "./Constant";
import Map = dragonBones.Map;
import ByteBufferUtil from "./util/ByteBufferUtil";


export default class SocketUtil {

    private socket;

    private handlers: Map<Function>;

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
        // let buffer:ArrayBuffer = new ArrayBuffer(messageBuf.byteLength);
        // new Uint8Array(buffer).set(new Uint8Array(messageBuf).subarray(0, messageBuf.byteLength),0);
        // cc.log(`messageBuf : ${messageBuf}`);
        // cc.log(`messageBuf.byteLength : ${messageBuf.byteLength}`);
        // cc.log(`messageBuf.byteOffset : ${messageBuf.byteOffset}`);
        // cc.log(`buffer : ${buffer}`);
        // cc.log(`buffer.byteLength : ${buffer.byteLength}`);
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