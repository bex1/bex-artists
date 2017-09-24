import { Artist } from '../../models';
import { ArtistsService } from './artists-service';
export declare class ImplArtistsService implements ArtistsService {
    private static readonly USER_AGENT;
    private static readonly MUSIC_BRAINZ_API_URL;
    private static readonly WIKIPEDIA_API_URL;
    private static readonly COVER_ART_ARCHIVE_API_URL;
    get(id: string): Promise<Artist>;
    private getArtistData(id);
    private getArtistDescription(wikipediaRelation);
    private getAlbumsData(releaseGroups);
    private getAlbumData(releaseGroup);
    private getArtistRequestOptions(id);
    private getArtistDescriptionRequestOptions(wikipediaName);
    private getAlbumRequestOptions(id);
}
