import { RowDataPacket } from "mysql2/promise";
import { Play } from "@/lib/db/models/Play";

export class RowDataPacketPlayAdapter {
    
    private rowDataPacket: RowDataPacket[];

    constructor(rowDataPacket: RowDataPacket[]) {
        this.rowDataPacket = rowDataPacket;
    }

    toPlays(): Play[] {
        return this.rowDataPacket.map(elem => {
            const play = new Play();
            play.alt = elem.alt ?? '';
            play.identifier = elem.identifier ?? ''; 
            play.name = elem.name ?? '';
            play.posterPath = elem.posterPath ?? '';
            play.slogan = elem.slogan ?? '';
            return play;
        });
    }
}
