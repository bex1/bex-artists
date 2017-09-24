/// <reference types="winston" />
import { RestError } from '../errors';
import { Logger } from '../../logging';
export declare class RestErrorMiddleware {
    static readonly LOGGER: Logger;
    static normalizeToRestError(err: any, req: any, res: any, next: any): any;
    static serializeRestError(err: RestError, req: any, res: any, next: any): any;
}
