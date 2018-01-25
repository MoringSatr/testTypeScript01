export default class ByteBufferUtil {

    public static uint8ArrayToArrayBuffer(uint8Array: Uint8Array): ArrayBuffer {
        let arrayBuffer: ArrayBuffer = new ArrayBuffer(uint8Array.byteLength);
        new Uint8Array(arrayBuffer).set(new Uint8Array(uint8Array).subarray(0, uint8Array.byteLength), 0);
        // cc.log(`uint8Array : ${uint8Array}`);
        // cc.log(`uint8Array.byteLength : ${uint8Array.byteLength}`);
        // cc.log(`uint8Array.byteOffset : ${uint8Array.byteOffset}`);
        // cc.log(`arrayBuffer : ${arrayBuffer}`);
        // cc.log(`arrayBuffer.byteLength : ${arrayBuffer.byteLength}`);
        return arrayBuffer;
    }
}