import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';
import searchEnterTrigger from './SearchTrigger';

searchEnterTrigger();

const albumTracks = document.getElementById('album-tracks');
const albumInfo = document.getElementById('album-info');

const album = spotify.album.getAlbum('64lYVfx8NrXctVRKwGbPWB');

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));

/* export const search = () => {};
export const searchAlbums = () => {};
export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {}; */

//export const search = (query, type) => fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`);
