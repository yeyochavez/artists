import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/core/models/album.model';
import { Artist } from 'src/app/core/models/artist.model';
import { Song } from 'src/app/core/models/song.model';
import { DataService } from 'src/app/core/services/data.service';
import { SongService } from 'src/app/core/services/song.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist: Artist;

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private songService: SongService) {
    let nameArtist = this.route.snapshot.paramMap.get('nameArtist') || '';
    this.dataService.getArtistByName(nameArtist).then(response => this.artist = response);
  }

  ngOnInit(): void {

  }

  getAlbumsArtist(): Album[] {
    return this.artist ? this.artist.albums : [];
  }

  selectSong(song: Song): void {
    this.songService.changeSong(song);
  }
}
