import { Album } from '../../models';
import { Artist } from '../../models';
import { ArtistsService } from './artists-service';
import * as request from 'request-promise-native';

export class ImplArtistsService implements ArtistsService {
  private static readonly USER_AGENT: string = 'Bex/0.0.1 ( bex@justarrived.se )';
  private static readonly MUSIC_BRAINZ_API_URL: string = 'http://musicbrainz.org/ws/2/';
  private static readonly WIKIPEDIA_API_URL: string = 'https://en.wikipedia.org/w/api.php';
  private static readonly COVER_ART_ARCHIVE_API_URL: string = 'http://coverartarchive.org/';

  get(id: string): Promise<Artist> {
    return this.getArtistData(id).then(data => new Artist(data));
  }

  private getArtistData(id: string): Promise<any> {
    return request(this.getArtistRequestOptions(id))
    .then(body => {
      let wikipediaRelation = body.relations.find(relation =>
        relation.type === 'wikipedia' && relation.url && relation.url.resource);

      return Promise.all([
        this.getArtistDescription(wikipediaRelation),
        this.getAlbumsData(body['release-groups'])
      ])
      .then(results => {
        let description = results[0];
        let albums = results[1];

        return {
          id: id,
          description: description,
          albums: albums
        };
      });
    });
  }

  private getArtistDescription(wikipediaRelation: any): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!wikipediaRelation) {
        resolve('');
      } else {
        let wikipediaName = wikipediaRelation.url.resource.split('/').pop();

        resolve(request(this.getArtistDescriptionRequestOptions(wikipediaName))
        .then(body => {
          let pages = body.query.pages;
          let attributes = Object.keys(pages);
          if (attributes.length) {
            let page = pages[attributes[0]];
            return page.extract;
          } else {
            return '';
          }
        }));
      }
    });
  }

  private getAlbumsData(releaseGroups: Array<any>): Promise<Array<any>> {
    return Promise.all(releaseGroups.map(releaseGroup => {
      return this.getAlbumData(releaseGroup);
    }));
  }

  private getAlbumData(releaseGroup: any): Promise<any> {
    return request(this.getAlbumRequestOptions(releaseGroup['id']))
    .then(body => {
      return {
        id: releaseGroup['id'],
        title: releaseGroup['title'],
        images: body.images.map(image => image.image)
      };
    })
    .catch(err => {
      if (err.statusCode === 404) {
        return {
          id: releaseGroup['id'],
          title: releaseGroup['title'],
          images: []
        };
      } else {
        throw err;
      }
    });
  }

  private getArtistRequestOptions(id: string): any {
    return {
      uri: '/artist/' + id,
      baseUrl: ImplArtistsService.MUSIC_BRAINZ_API_URL,
      qs: {
        fmt: 'json',
        inc: 'url-rels+release-groups'
      },
      headers: {
        'User-Agent': ImplArtistsService.USER_AGENT,
      },
      json: true
    };
  }

  private getArtistDescriptionRequestOptions(wikipediaName: string): any {
    return {
      url: ImplArtistsService.WIKIPEDIA_API_URL,
      qs: {
        action: 'query',
        format: 'json',
        prop: 'extracts',
        exintro: 'true',
        redirects: 'true',
        titles: wikipediaName
      },
      headers: {
        'User-Agent': ImplArtistsService.USER_AGENT,
      },
      json: true
    };
  }

  private getAlbumRequestOptions(id: string): any {
    return {
      uri: '/release-group/' + id,
      baseUrl: ImplArtistsService.COVER_ART_ARCHIVE_API_URL,
      headers: {
        'User-Agent': ImplArtistsService.USER_AGENT,
      },
      json: true
    };
  }
}
