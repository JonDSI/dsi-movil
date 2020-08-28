import { CommerceModel } from "./commerce.model";

export interface CategoriesModel {
    id?: number;
    name: string;
    commerce: CommerceModel[];
}
