/// <reference types="express" />
import { Router } from 'express';
import { RestController } from './rest-controller';
export declare abstract class RestRouter {
    router: Router;
    constructor();
    abstract initRoutes(): any;
    resolveParam(controller: RestController, handlerFn: Function): (req: any, res: any, next: any, param: any) => Promise<any>;
    resolveRoute(controller: RestController, handlerFn: Function): (req: any, res: any, next: any) => Promise<any>;
}
