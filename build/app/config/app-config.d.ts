export declare class AppConfig {
    private environment;
    port: number;
    logLevel: string;
    serveStatic: boolean;
    enableHttpRequestLogging: boolean;
    constructor(environment: any);
    getEnvironment(): any;
    private getBooleanEnvVar(variableName, defaultValue?);
    private getIntegerEnvVar(variableName, defaultValue?);
    private getStringEnvVar(variableName, defaultValue?);
    private getEnvVar(variableName, defaultValue);
}
