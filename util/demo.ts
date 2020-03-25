type CallbackFunction = () => void;

export default class Demo {
    list: CallbackFunction[];
    constructor() {
        this.list = [];
        return this;
    }
    add(fn: CallbackFunction) {
        this.list.push(fn);
        return this;
    }
    run() {
        this.list.forEach(fn => fn());
    }
}