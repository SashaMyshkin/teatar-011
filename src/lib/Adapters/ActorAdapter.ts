import { Actor } from "@/lib/db/models/Actor";
import { BaseAdapter } from "@/lib/Adapters/BaseAdapter";

export class ActorAdapter extends BaseAdapter<Actor> {

    constructor(data: Actor[]) {
        super(data);
    }

    adapt(): Actor[] {
        return this.data.map(elem => {
            const play = new Actor();
            play.alt = elem.alt ?? ''; 
            play.identifier = elem.identifier ?? '';
            play.fullname = elem.fullname ?? '';
            play.imgPath = elem.imgPath ?? '';
            play.membershipStatus = elem.membershipStatus ?? '';
            return play;
        });
    }
}