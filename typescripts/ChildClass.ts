import SuperClass from "./SuperClass";
import Global from "./Global";
import {MessageProto} from "./proto/protocol";
import Text = MessageProto.Text;
import Message = MessageProto.Message;

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

	onButtonClick() {
		cc.log(`onButtonClick...`);
		Global.getInstance().Panel.show(500, 250);
		Global.getInstance().SocketUtil.connect();

		let text: Text = new Text();
		text.id = `1111`;
		text.message = `aaa`;
		let message: Message = new Message();
		message.cmd = 10001;
		message.body = Text.encode(text).finish();
		Global.getInstance().SocketUtil.sendMessage(message);

	}
}
