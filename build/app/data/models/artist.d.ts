import { Model } from './model';
import { Album } from './album';
export declare class Artist extends Model {
    description: string;
    albums: Array<Album>;
    constructor(data: any);
}
