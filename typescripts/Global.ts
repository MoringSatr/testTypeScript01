import Panel from "./Panel";
import SocketUtil from "./SocketUtil";


export default class Global {

	private static instance: Global = new Global();

	public Panel: Panel;

	public SocketUtil: SocketUtil;

	public static getInstance(): Global {
		return this.instance;
	}

	public load(): void {

		this.Panel = new Panel();
		this.Panel.load();
		this.SocketUtil = new SocketUtil();
	}

}