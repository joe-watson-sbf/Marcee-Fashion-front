import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  titre="MARCee FAShion";
  sousTitre="Please fill in this form to create an account.";
  constructor() { }

  ngOnInit(): void {
  }

}
