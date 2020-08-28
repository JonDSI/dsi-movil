import { ErrorModel } from "./error.model";

export interface ResponseModel<T> {
    codeError: string; // -1.- Error Interno del sistema, 0.- OK, 1.- Error de validación
    errors: ErrorModel[];
    messageDetail: string;
    body: T;
}
