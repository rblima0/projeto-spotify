import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

/* export const search = () => {};
export const searchAlbums = () => {};
export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {}; */

//export const search = (query, type) => fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`);

const albumList = document.getElementById('album-list');
const albumTracks = document.getElementById('album-tracks');
const albumInfo = document.getElementById('album-info');

const albums = spotify.search.albums('Raça Negra');
const album = spotify.album.getAlbum('64lYVfx8NrXctVRKwGbPWB');

albums
  .then(data => renderAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
