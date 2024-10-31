import { RowDataPacket } from "mysql2/promise";

export class Play {
    name: string;
    identifier: string;
    posterPath: string;
    alt: string;
    slogan: string;

    constructor(name?: string, identifier?: string, posterPath?: string, alt?: string, slogan?: string) {
        this.name = name || '';
        this.identifier = identifier || '';
        this.posterPath = posterPath || '';
        this.alt = alt || '';
        this.slogan = slogan || '';
    }

    static fromRowDataPacket(row: RowDataPacket): Play {
        return new Play(
            row.name ?? '',
            row.identifier ?? '',
            row.posterPath ?? '',
            row.alt ?? '',
            row.slogan ?? ''
        );
    }
    
    

    
}

