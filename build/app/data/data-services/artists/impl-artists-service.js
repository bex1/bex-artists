"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../../models");
var request = require("request-promise-native");
var ImplArtistsService = (function () {
    function ImplArtistsService() {
    }
    ImplArtistsService.prototype.get = function (id) {
        return this.getArtistData(id).then(function (data) { return new models_1.Artist(data); });
    };
    ImplArtistsService.prototype.getArtistData = function (id) {
        var _this = this;
        return request(this.getArtistRequestOptions(id))
            .then(function (body) {
            var wikipediaRelation = body.relations.find(function (relation) {
                return relation.type === 'wikipedia' && relation.url && relation.url.resource;
            });
            return Promise.all([
                _this.getArtistDescription(wikipediaRelation),
                _this.getAlbumsData(body['release-groups'])
            ])
                .then(function (results) {
                var description = results[0];
                var albums = results[1];
                return {
                    id: id,
                    description: description,
                    albums: albums
                };
            });
        });
    };
    ImplArtistsService.prototype.getArtistDescription = function (wikipediaRelation) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!wikipediaRelation) {
                resolve('');
            }
            else {
                var wikipediaName = wikipediaRelation.url.resource.split('/').pop();
                resolve(request(_this.getArtistDescriptionRequestOptions(wikipediaName))
                    .then(function (body) {
                    var pages = body.query.pages;
                    var attributes = Object.keys(pages);
                    if (attributes.length) {
                        var page = pages[attributes[0]];
                        return page.extract;
                    }
                    else {
                        return '';
                    }
                }));
            }
        });
    };
    ImplArtistsService.prototype.getAlbumsData = function (releaseGroups) {
        var _this = this;
        return Promise.all(releaseGroups.map(function (releaseGroup) {
            return _this.getAlbumData(releaseGroup);
        }));
    };
    ImplArtistsService.prototype.getAlbumData = function (releaseGroup) {
        return request(this.getAlbumRequestOptions(releaseGroup['id']))
            .then(function (body) {
            return {
                id: releaseGroup['id'],
                title: releaseGroup['title'],
                images: body.images.map(function (image) { return image.image; })
            };
        })
            .catch(function (err) {
            if (err.statusCode === 404) {
                return {
                    id: releaseGroup['id'],
                    title: releaseGroup['title'],
                    images: []
                };
            }
            else {
                throw err;
            }
        });
    };
    ImplArtistsService.prototype.getArtistRequestOptions = function (id) {
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
    };
    ImplArtistsService.prototype.getArtistDescriptionRequestOptions = function (wikipediaName) {
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
    };
    ImplArtistsService.prototype.getAlbumRequestOptions = function (id) {
        return {
            uri: '/release-group/' + id,
            baseUrl: ImplArtistsService.COVER_ART_ARCHIVE_API_URL,
            headers: {
                'User-Agent': ImplArtistsService.USER_AGENT,
            },
            json: true
        };
    };
    ImplArtistsService.USER_AGENT = 'Bex/0.0.1 ( bex@justarrived.se )';
    ImplArtistsService.MUSIC_BRAINZ_API_URL = 'http://musicbrainz.org/ws/2/';
    ImplArtistsService.WIKIPEDIA_API_URL = 'https://en.wikipedia.org/w/api.php';
    ImplArtistsService.COVER_ART_ARCHIVE_API_URL = 'http://coverartarchive.org/';
    return ImplArtistsService;
}());
exports.ImplArtistsService = ImplArtistsService;
//# sourceMappingURL=impl-artists-service.js.map