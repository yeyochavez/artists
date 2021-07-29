import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/core/models/song.model';
import { SongService } from 'src/app/core/services/song.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  nameUser: string;

  currentSong: Song;

  constructor(private songService: SongService) {
    this.songService.getSong$.subscribe(response => {
      this.currentSong = response;
    });
  }

  ngOnInit(): void {
  }

  getSongTitle(): string {
    return this.currentSong.title ? this.currentSong.title : '';
  }

}
