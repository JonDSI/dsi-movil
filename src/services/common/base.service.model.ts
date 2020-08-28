import { CrudServiceModel } from "./crud.service.model";

import { ResponseModel } from '../../model/common/response.model';

export interface BaseServiceModel<T> extends CrudServiceModel<T>{
    getSearch(): T[];

 }
   