import Event from "./Event";
import {EventCode} from "./EventCode";

export default class Event1 extends Event {


    constructor() {
        super(EventCode.event_3);
    }


    exc(): void {
        cc.log(`im Event1 _eventType:${this.eventType}`);
    }
}