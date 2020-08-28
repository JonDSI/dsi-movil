
import axios from 'axios';

import { BaseServiceModel } from '../common/base.service.model';
import { CategoriesModel } from '../../model/categories.model';

export class HomeServiceImpl implements BaseServiceModel<CategoriesModel> {

    private api = axios.create({ baseURL: '' });;
    private categories: CategoriesModel[] = [];

    constructor(){
    }

    public getSearch(): CategoriesModel[] {
        this.api.get('/')
            .then(response => { 
                this.categories = response.data;
            }
        );
        return this.categories;
    }
}
