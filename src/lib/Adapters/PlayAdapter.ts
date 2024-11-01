import { Play } from "@/lib/db/models/Play";
import { BaseAdapter } from "@/lib/Adapters/BaseAdapter";

export class PlayAdapter extends BaseAdapter<Play> {

    constructor(data: Play[]) {
        super(data);
    }

    toDataType(): Play[] {
        return this.data.map(elem => {
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