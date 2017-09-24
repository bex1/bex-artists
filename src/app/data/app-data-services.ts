import { ArtistsService, ImplArtistsService } from './data-services';

export class AppDataServices {
  public artistsService: ArtistsService;

  constructor() {
    this.initDataServices();
  }

  private initDataServices() {
    this.artistsService = new ImplArtistsService();
  }
}
