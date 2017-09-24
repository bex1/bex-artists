import { RestRouter } from '../../../common';
import { ArtistsController } from './artists-controller';
import { ArtistsService } from '../../../data';

export class ArtistsRouter extends RestRouter {
  artistsCtrl: ArtistsController;

  constructor(artistsService: ArtistsService) {
    super();
    this.artistsCtrl = new ArtistsController(artistsService);
    this.initRoutes();
  }

  initRoutes() {
    this.router.param('id', this.resolveParam(this.artistsCtrl, this.artistsCtrl.resolveArtist));

    this.router.get('/:id', this.resolveRoute(this.artistsCtrl, this.artistsCtrl.get));
    this.router.delete('/:id', this.resolveRoute(this.artistsCtrl, this.artistsCtrl.throwMethodNotAllowedError));
    this.router.patch('/:id', this.resolveRoute(this.artistsCtrl, this.artistsCtrl.throwMethodNotAllowedError));
    this.router.all('/:id', this.resolveRoute(this.artistsCtrl, this.artistsCtrl.throwMethodNotAllowedError));
  }
}
