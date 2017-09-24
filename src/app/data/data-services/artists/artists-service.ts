import { Artist } from '../../models';

export interface ArtistsService {
  get(id: string): Promise<Artist>;
}
