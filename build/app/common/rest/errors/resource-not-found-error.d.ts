import { RestError } from './rest-error';
export declare class ResourceNotFoundError extends RestError {
    message: string;
    constructor(message?: string);
}
