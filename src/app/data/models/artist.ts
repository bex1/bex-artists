import { Model } from './model';
import { Album } from './album';

export class Artist extends Model {
  public description: string;
  public albums: Array<Album>;

  constructor(data: any) {
    super(data.id);
    this.description = data.description;
    data.albums = data.albums || [];
    this.albums = data.albums.map(albumData => new Album(albumData));
  }
}
