import { ArtistsService } from '../../../data';
import { RestController } from '../../../common';
export declare class ArtistsController extends RestController {
    private artistsService;
    constructor(artistsService: ArtistsService);
    private static readonly LOGGER;
    get(req: any, res: any, next: any): any;
    resolveArtist(req: any, res: any, next: any, id: string): Promise<any>;
}
