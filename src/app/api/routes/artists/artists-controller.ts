import { ArtistsService, Artist } from '../../../data';
import { Logger, LoggerFactory, RestController } from '../../../common';

export class ArtistsController extends RestController {
  constructor(private artistsService: ArtistsService) {
    super();
  }

  private static readonly LOGGER: Logger = LoggerFactory.getLogger();

  get(req, res, next): any {
    return this.respond(res, req.artist);
  }

  resolveArtist(req, res, next, id: string): Promise<any> {
    return this.artistsService.get(id)
      .then((artist: Artist) => {
        this.validateResourceFound(artist);
        req.artist = artist;
        next();
      });
  }
}
