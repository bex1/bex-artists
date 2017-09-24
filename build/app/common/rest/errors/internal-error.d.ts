import { RestError } from './rest-error';
export declare class InternalError extends RestError {
    originalError: Error;
    message: string;
    constructor(originalError: Error, message?: string);
}
