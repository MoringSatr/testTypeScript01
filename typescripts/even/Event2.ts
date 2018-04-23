import Event from "./Event";
import {EventCode} from "./EventCode";

export default class Event2 extends Event {

    constructor() {
        super(EventCode.event_4);
    }

    exc(): void {
        cc.log(`im Event2 _eventType:${this.eventType}`);
    }
}