export class Actor {
    private _fullname: string;
    private _identifier: string;
    private _imgPath: string;
    private _alt: string;
    private _membershipStatus: string;

    constructor() {
        this._fullname = '';
        this._imgPath = '';
        this._identifier = '';
        this._alt = '';
        this._membershipStatus = '';
    }

    // Getter and Setter for fullname
    public get fullname(): string {
        return this._fullname;
    }

    public set fullname(name: string) {
        this._fullname = name;
    }

    // Getter and Setter for identifier
    public get identifier(): string {
        return this._identifier;
    }

    public set identifier(id: string) {
        this._identifier = id;
    }

    // Getter and Setter for imgPath
    public get imgPath(): string {
        return this._imgPath;
    }

    public set imgPath(path: string) {
        this._imgPath = path;
    }

    // Getter and Setter for alt
    public get alt(): string {
        return this._alt;
    }

    public set alt(description: string) {
        this._alt = description;
    }

    // Getter and Setter for membershipStatus
    public get membershipStatus(): string {
        return this._membershipStatus;
    }

    public set membershipStatus(status: string) {
        this._membershipStatus = status;
    }
}
