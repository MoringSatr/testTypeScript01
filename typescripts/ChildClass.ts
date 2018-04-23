import SuperClass from "./SuperClass";
import {MessageProto} from "./proto/protocol";
import Text = MessageProto.Text;
import Message = MessageProto.Message;
import Global from "./Global";

const {ccclass} = cc._decorator;

@ccclass
export default class ChildClass extends SuperClass {
    protected async testAsync(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello, World! From ChildClass!");
            }, 1000);
        });
    }

    private onButtonClick(): void {
        cc.log(`onButtonClick...`);
        Global.getInstance().Panel.show(70, 100, this.node);
        Global.getInstance().SocketUtil.connect();

        let text: Text = new Text();
        text.id = `1111`;
        text.message = `aaa`;
        let message: Message = new Message();
        message.cmd = 20001;
        message.body = Text.encode(text).finish();
        Global.getInstance().SocketUtil.sendMessage(message);

    }

    private onHidePanel(): void {
        Global.getInstance().Panel.hide(this.node);
    }
}
