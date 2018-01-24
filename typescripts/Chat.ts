import Global from "./Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Chat extends cc.Component {

	@property(cc.EditBox)
	private input: cc.EditBox = null;

	@property(cc.ScrollView)
	private scrollview: cc.ScrollView = null;

	start() {

	}

	sendMessage(): void {

	}


}