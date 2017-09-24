import { RestError } from './rest-error';
export declare class InvalidResourceUrlError extends RestError {
    message: string;
    constructor(message?: string);
}
