import Panel from "./Panel";
import SocketUtil from "./SocketUtil";

export default class Global {

    public Panel: Panel;

    public SocketUtil: SocketUtil;

    public static getInstance(): Global {
        return GlobalInstance.instance;
    }

    public load(): void {
        this.Panel = new Panel();
        this.SocketUtil = new SocketUtil();
    }

}

class GlobalInstance {
    public static instance: Global = new Global();
}
