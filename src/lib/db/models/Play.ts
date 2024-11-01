export class Play {
    private _name: string;
    private _identifier: string;
    private _posterPath: string;
    private _alt: string;
    private _slogan: string;

    constructor(name?: string, identifier?: string, posterPath?: string, alt?: string, slogan?: string) {
        this._name = name || '';
        this._identifier = identifier || '';
        this._posterPath = posterPath || '';
        this._alt = alt || '';
        this._slogan = slogan || '';
    }

    // Getters
    get name(): string {
        return this._name;
    }

    get identifier(): string {
        return this._identifier;
    }

    get posterPath(): string {
        return this._posterPath;
    }

    get alt(): string {
        return this._alt;
    }

    get slogan(): string {
        return this._slogan;
    }

    // Setters
    set name(value: string) {
        this._name = value;
    }

    set identifier(value: string) {
        this._identifier = value;
    }

    set posterPath(value: string) {
        this._posterPath = value;
    }

    set alt(value: string) {
        this._alt = value;
    }

    set slogan(value: string) {
        this._slogan = value;
    }
}
