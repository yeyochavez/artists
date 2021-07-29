import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractArtistComponent } from './abstract-artist.component';

describe('AbstractArtistComponent', () => {
  let component: AbstractArtistComponent;
  let fixture: ComponentFixture<AbstractArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
