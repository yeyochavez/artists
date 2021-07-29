import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/core/models/artist.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nameUser: string;
  artists: Artist[];

  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.nameUser = this.route.snapshot.paramMap.get('nameUser') || '';
    this.validateInformation();
  }


  validateInformation(): void {
    if (!this.nameUser) {
      this.router.navigate(['/main']);
    }
  }

  ngOnInit(): void {
  }

  showArtists(): void {
    this.router.navigate(['/home/list-artists']);
  }
}
