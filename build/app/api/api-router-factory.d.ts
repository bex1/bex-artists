/// <reference types="express" />
import { Router } from 'express';
import { AppDataServices } from '../data';
export declare class ApiRouterFactory {
    private static readonly LOGGER;
    private constructor();
    static getApiRouter(services: AppDataServices): Router;
}
