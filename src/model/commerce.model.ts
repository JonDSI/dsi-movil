import { LocationModel } from "./location.model";
import { CategorieModel } from "./categorie.model";
import { ImageModel } from "./image.model";

export interface CommerceModel {
    id?: number;
    name:string;
    intialTime: Date;
    endTime: Date;
    ranking: number;
    categorie: CategorieModel;
    location: LocationModel;
    image: ImageModel;
}