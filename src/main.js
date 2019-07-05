import spotify from './Spotify';
import renderAlbums from './AlbumList';

export const search = () => {};
export const searchAlbums = () => {};
export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {};

//export const search = (query, type) => fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`);

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');

albums
  .then(data =>
    renderAlbums(data.albums.items, albumList)
  );
