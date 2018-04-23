import String = cc.String;
import Integer = cc.Integer;
import Event from "./even/Event";
import Event1 from "./even/Event1";
import Event2 from "./even/Event2";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Chat extends cc.Component {

    @property(cc.EditBox)
    private input: cc.EditBox = null;

    @property(cc.ScrollView)
    private scrollview: cc.ScrollView = null;

    private events: Map<number, Event> = new Map();

    start() {
        let map: Map<string, number> = new Map<string, number>();
        map.set("qq", 11);
        map.set("qq1", 112);
        map.set("qq2", 111);
        map.set("qq", 22222);
        cc.log(`map : ${map}`);
        map.forEach((value, key) => {
            cc.log(`mapStr  key:${key} , value:${value}`);
        });

        let event1: Event = new Event1();
        let event2: Event = new Event2();
        this.events.set(event1.eventType, event1);
        this.events.set(event2.eventType, event2);

        this.events.forEach((event) => {
            event.exc();
        })

    }

    sendMessage(): void {
    }


}