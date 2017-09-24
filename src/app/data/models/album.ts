import { Model } from './model';

export class Album extends Model {
  public title: string;
  public images: Array<string>;

  constructor(data: any) {
    super(data.id);
    this.title = data.title;
    this.images = data.images;
  }
}
