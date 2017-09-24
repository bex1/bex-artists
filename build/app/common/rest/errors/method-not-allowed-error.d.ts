import { RestError } from './rest-error';
export declare class MethodNotAllowedError extends RestError {
    message: string;
    constructor(message?: string);
}
