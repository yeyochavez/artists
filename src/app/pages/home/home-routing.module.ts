import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from 'src/app/components/artist/artist.component';
import { ListArtistsComponent } from 'src/app/components/list-artists/list-artists.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list-artists',
        component: ListArtistsComponent
      },
      {
        path: 'artist',
        component: ArtistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
