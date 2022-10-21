import { Component, OnInit } from '@angular/core';
import { teachers, Teacher, teacherNames } from '../teachers';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {form-field} from '@angular/material';


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
// Start of code from https://material.angular.io/components/autocomplete/examples, specifically from the Display Value autocomplete example
  myControl = new FormControl('');
  options: Teacher[] = teachers;
  filteredOptions!: Observable<Teacher[]>;

  ngOnInit(): void {
    // valueChanges is an event emmited whenever the value of the formControl changes
    // pipe is a function that takes in a series of functions and returns a new function
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        // Will take every value, and if it is a string, it will map it to itself, but if not it will map it to it's name property
        const name = typeof(value === 'string' ? value: value.name)
        // Not actually sure what this next line does
        return name ? this._filter(name as string) : this.options.slice();
      })
    )
  }

  displayFn(teach: Teacher): string {
    return teach && teach.name ? teach.name : '';
  }


  // Not sure what this does
  private _filter(name: string): Teacher[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}

