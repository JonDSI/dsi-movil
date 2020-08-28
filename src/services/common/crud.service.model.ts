import { ResponseModel } from '../../model/common/response.model';

export interface CrudServiceModel<T> {
    save(value: T): ResponseModel<T>;

    update(id: number, value: T): ResponseModel<T>;

    delete(id: number, value: T): ResponseModel<T>;

    cancel(id: number): ResponseModel<T>;
}
