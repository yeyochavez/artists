import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Album } from 'src/app/core/models/album.model';
import { Song } from 'src/app/core/models/song.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input()
  album: Album;

  @Output()
  songEmit: EventEmitter<Song>;

  constructor() {
    this.songEmit = new EventEmitter<Song>();
  }

  ngOnInit(): void {
  }

  getSongs(): Song[] {
    return this.album.songs ? this.album.songs : [];
  }

  selectSong(song: Song): void {
    this.songEmit.emit(song);
  }

}
