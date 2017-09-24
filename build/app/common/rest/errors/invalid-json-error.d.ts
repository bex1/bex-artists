import { RestError } from './rest-error';
export declare class InvalidJsonError extends RestError {
    message: string;
    constructor(message?: string);
}
