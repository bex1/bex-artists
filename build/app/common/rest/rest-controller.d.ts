/// <reference types="express" />
import { Response } from 'express';
export declare class RestController {
    constructor();
    respond(res: Response, item: any | Array<any>, statusCode?: number): Response;
    respondNoContent(res: Response, statusCode?: number): Response;
    validateResourceFound(item: any): void;
    throwMethodNotAllowedError(req: any, res: any, next: any): void;
}
