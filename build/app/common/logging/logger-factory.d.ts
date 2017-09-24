/// <reference types="winston" />
import { LoggerInstance } from 'winston';
export declare class LoggerFactory {
    private static logger;
    private constructor();
    static getLogger(): LoggerInstance;
}
export { LoggerInstance as Logger };
