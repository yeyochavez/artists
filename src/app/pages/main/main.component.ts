import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  nameUserControl: FormControl;

  constructor(private router: Router) {
    this.nameUserControl = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  sendInformation() {
    this.router.navigate(['/home', { nameUser: this.nameUserControl.value}]);
  }

}
