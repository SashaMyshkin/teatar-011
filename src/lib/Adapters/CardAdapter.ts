import { Play } from "@/lib/db/models/Play";
import { Actor } from "@/lib/db/models/Actor";
import { BaseAdapter } from "@/lib/Adapters/BaseAdapter";

export class CardAdapter extends BaseAdapter<Play | Actor> {
    
    constructor(data: Play[] | Actor[]) {
        super(data);
    }

    adapt(): Card[] {
        return this.data.map(elem => this.createCard(elem));
    }

    private createCard(elem: any): Card {

        if(elem instanceof Play){
            return this.fromPlay(elem);
        } else if(elem instanceof Actor){
            return this.fromActor(elem);
        }
        else {
            throw new Error(`Unknown data type ${elem.type}`)
        }
    }

    private fromPlay(elem: Play): Card {
        return {
            src:elem.posterPath ?? '',
            alt:elem.alt ?? '',
            path: elem.identifier ?? '',
            header: elem.slogan ?? ''
        }
    }

    private fromActor(elem: Actor): Card {
        return {
            src:elem.imgPath ?? '',
            alt:elem.alt ?? '',
            path: elem.identifier ?? '',
            header: elem.fullname ?? '',
            moreInfo:elem.membershipStatus ?? ''
        }
    }

    
}
