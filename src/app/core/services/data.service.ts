import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Artist } from '../models/artist.model';
import { getArtists, getAlbumsByArtist, getArtistByName } from '../utils/data.util';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = '/assets/data/';
  }

  getArtist(): Promise<Artist[]> {
    const NAME_FILE = 'data.json';
    return this.http.get<any>(this.BASE_URL + NAME_FILE).toPromise().then(res => getArtists(res.data));
  }

  getAlbumsByArtist(nameArtist: string): Promise<Album[]> {
    const NAME_FILE = 'data.json';
    return this.http.get<any>(this.BASE_URL + NAME_FILE).toPromise().then(res => getAlbumsByArtist(nameArtist, res.data));
  }

  getArtistByName(nameArtist: string): Promise<Artist> {
    const NAME_FILE = 'data.json';
    return this.http.get<any>(this.BASE_URL + NAME_FILE).toPromise().then(res => getArtistByName(nameArtist, res.data));
  }

}
