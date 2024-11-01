export abstract class BaseAdapter<T> {
    protected data: T[];
    constructor(data: T[]) {
        this.data = data;
    }
    abstract adapt(): any[];
}


