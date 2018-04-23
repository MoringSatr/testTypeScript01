import {EventCode} from "./EventCode";

export default abstract class Event {

    private _eventType: EventCode;

    constructor(eventType: EventCode) {
        this._eventType = eventType;
    }

    get eventType(): number {
        return this._eventType;
    }

    abstract exc(): void;
}