import {EventCode} from "./EventCode";

export default abstract class EventListener {

    private _eventType: EventCode;


    constructor(eventType: EventCode) {
        this._eventType = eventType;
    }


    get eventType(): EventCode {
        return this._eventType;
    }

    abstract onEvent(event: Event): void;
}