import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {

  describe('Smoke Tests', () => {

    it('should exist the search method', () => {
      expect(search).to.exist
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist
    });

  });

  describe.skip('Generic Search', () => {
    let fetchStub

    beforeEach(function() {
      fetchStub = sinon.stub(global, 'fetch')
    });

    afterEach(function() {
      fetchStub.restore()
    });

    it('should call fetch function', () => {
      const artists = search()

      expect(fetchStub).to.have.been.calledOnce
    });

    it('should receive artist and type in url to fetch', () => {
      const artists = search('mamonas', 'artist')

      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=mamonas&type=artist')

      const albums = search('mamonas', 'album')

      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=mamonas&type=album')
    });

  });

});
