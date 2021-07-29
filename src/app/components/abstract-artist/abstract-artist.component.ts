import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Artist } from 'src/app/core/models/artist.model';

@Component({
  selector: 'app-abstract-artist',
  templateUrl: './abstract-artist.component.html',
  styleUrls: ['./abstract-artist.component.scss']
})
export class AbstractArtistComponent implements OnInit {

  @Input()
  artist: Artist;

  @Output()
  artistEmit: EventEmitter<string>;

  constructor() {
    this.artistEmit = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  selectArtist() {
    this.artistEmit.emit(this.artist.artist);
  }
}
