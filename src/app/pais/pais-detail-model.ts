import { PaisModel } from "./pais-model";

export class PaisDetailModel extends PaisModel{

    constructor( id: number, name: string, formation_year: number, capital: string, description: string, flag: string){
        super(id, name, formation_year, capital, description, flag);
        
    }

}
