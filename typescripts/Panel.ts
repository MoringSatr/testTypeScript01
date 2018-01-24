const {ccclass, property} = cc._decorator;

@ccclass
export default class Panel extends cc.Component {

	@property(cc.Prefab)
	private panel: cc.Prefab = null;


	public load(): void {
		cc.log(`Panel load ...`);
		cc.loader.loadRes("prefab/panel", cc.Prefab, (error, prefab: cc.Prefab) => {
			if (prefab == null) {
				return;
			}
			this.panel = prefab;
		});
	}

	public show(x: number, y: number): void {
		if (this.panel == null) {
			return;
		}
		cc.log(`panel ${this.panel}`);
		cc.log(`Panel show ...`);
		this.panel.data.setPosition(x, y);
		this.panel.data.active = true;
		cc.log(`Panel name ${this.panel.name}`);
	}

	public hide(): void {
		if (this.panel == null) {
			return;
		}
		this.panel.data.active = false;
	}

}