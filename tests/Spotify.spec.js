import { expect } from 'chai'
import spotify from '../src/Spotify'

describe('Spotify Suite Tests', function() {
  it('should be an object', function() {
    expect(spotify).to.be.an.object;
  })

  it('should have search', function() {
    expect(spotify.search).to.exist;
  })

  it('should have album methods', function() {
    expect(spotify.album).to.exist;
  })
})
