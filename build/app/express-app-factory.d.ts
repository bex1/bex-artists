/// <reference types="express" />
import { Express, Router, RequestHandler, ErrorRequestHandler } from 'express';
import { AppConfig } from './config';
export declare class ExpressAppFactory {
    private static readonly LOGGER;
    private constructor();
    static getExpressApp(appConfig: AppConfig, apiRouter: Router, preApiRouterMiddlewareFns: Array<RequestHandler | ErrorRequestHandler>, postApiRouterMiddlewareFns: Array<RequestHandler | ErrorRequestHandler>): Express;
}
