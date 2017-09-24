import { RestError } from './rest-error';
export declare class BadRequestError extends RestError {
    message: string;
    constructor(message?: string);
}
