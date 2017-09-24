import { RestRouter } from '../../../common';
import { ArtistsController } from './artists-controller';
import { ArtistsService } from '../../../data';
export declare class ArtistsRouter extends RestRouter {
    artistsCtrl: ArtistsController;
    constructor(artistsService: ArtistsService);
    initRoutes(): void;
}
