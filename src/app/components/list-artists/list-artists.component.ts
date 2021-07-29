import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/core/models/artist.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.scss']
})
export class ListArtistsComponent implements OnInit {

  artists: Artist[];

  constructor(private dataService: DataService,
    private router: Router) {
    this.artists = [];
  }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(): void {
    this.dataService.getArtist().then(response => {
      this.artists = response
    });
  }

  selectArtist(nameArtist: string): void {
    this.router.navigate(['/home/artist', { nameArtist }]);
  }

}
