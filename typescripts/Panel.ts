export default class Panel {

    private panel: cc.Prefab;

    private isShow: boolean;


    constructor() {
        this.isShow = false;
        this.load();
    }

    public load(): void {
        cc.log(`Panel load ...`);
        cc.loader.loadRes("prefab/panel", cc.Prefab, (error, prefab: cc.Prefab) => {
            if (prefab == null) {
                return;
            }
            this.panel = prefab;
        });
    }

    public show(x: number, y: number, node: cc.Node): void {
        if (this.panel == null) {
            return;
        }
        if (this.isShow) {
            return;
        }
        cc.log(`panel ${this.panel}`);
        cc.log(`Panel show ...`);
        this.panel.data.setPosition(x, y);
        this.panel.data.active = true;
        cc.log(`Panel name ${this.panel.name}`);
        node.addChild(this.panel.data);
        this.isShow = true;
    }

    public hide(node: cc.Node): void {
        if (this.panel == null) {
            return;
        }
        if (!this.isShow) {
            return;
        }
        node.removeChild(this.panel.data);
        this.panel.data.active = false;
        this.isShow = false;
    }

}