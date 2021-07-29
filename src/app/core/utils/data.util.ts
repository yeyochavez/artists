import { Album } from "../models/album.model";
import { Artist } from "../models/artist.model"
import { map } from 'rxjs/operators';

export function getArtists(artists: Artist[]): Artist[] {
    return artists.map(artist => {
        artist.totalAlbums = artist.albums ? artist.albums.length : 0;
        return artist;
    });
}

export function getAlbumsByArtist(nameArtist: string, artists: Artist[]): Album[] {
    let findArtist = artists.find(artist => artist.artist === nameArtist);
    return findArtist ? findArtist.albums : [];
}

export function getArtistByName(nameArtist: string, artists: Artist[]): any {
    let findArtist = artists.find(artist => artist.artist === nameArtist)
    return findArtist? findArtist : null;
}

