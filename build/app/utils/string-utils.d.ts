export declare class StringUtils {
    static isValidBoolean(value: string | boolean): boolean;
    static isValidInteger(value: string): boolean;
    static parseBoolean(value: string, errorMessage?: string): boolean;
    static parseInt(value: string, errorMessage?: string): number;
    private static convertStringToBoolean(value);
}
