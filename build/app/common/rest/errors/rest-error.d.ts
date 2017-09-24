export declare class RestError extends Error {
    message: string;
    httpStatusCode: number;
    code: string;
    constructor(message: string, httpStatusCode: number, code: string, name?: string);
}
