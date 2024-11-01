import { Play } from "../db/models/Play";
import { BaseAdapter } from "./BaseAdapter";

export class CardAdapter extends BaseAdapter<Play> {
    
    constructor(data: Play[]) {
        super(data);
    }

    adapt(): Card[] {
        return this.data.map(elem => this.createCard(elem));
    }

    private createCard(elem: any): Card {

        if(elem instanceof Play){
            return this.fromPlay(elem);
        } else {
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

    
}
