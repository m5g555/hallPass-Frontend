import { Component, OnInit } from '@angular/core';

// This will be a component that consists of a form for creating a new pass
// It will be accessed by clicking on the "Create New Pass" button on the home page
// Will contain fields for student and recieving teacher name
// Maybe add an optional reason field?

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.sass']
})
export class NewPassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
