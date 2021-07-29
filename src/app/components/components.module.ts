import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AbstractArtistComponent } from './abstract-artist/abstract-artist.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AlbumComponent } from './album/album.component';
import { HeaderComponent } from './header/header.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { ArtistComponent } from './artist/artist.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AbstractArtistComponent,
    AlbumComponent,
    HeaderComponent,
    ListArtistsComponent,
    ArtistComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
  ],
  exports: [
    AbstractArtistComponent,
    AlbumComponent,
    HeaderComponent,
    ListArtistsComponent,
    ArtistComponent
  ]
})
export class ComponentsModule { }
