import { Component, OnInit } from '@angular/core';
import { teachers, Teacher, teacherNames } from '../teachers';
import { Pass, activePasses } from '../passes';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';



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
  formTeacher = new FormControl('');
  formStudent = new FormControl('');
  formReason = new FormControl('');
  options: Teacher[] = teachers;
  filteredOptions!: Observable<Teacher[]>;

  ngOnInit(): void {
    // valueChanges is an event emmited whenever the value of the formControl changes
    // pipe is a function that takes in a series of functions and returns a new function
    this.filteredOptions = this.formTeacher.valueChanges.pipe(
      startWith(''),
      map(value => {
        // Will take every value, and if it is a string, it will map it to itself, but if not it will map it to it's name property
        const name = typeof value === 'string' ? value: value?.name
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

  public submit(): void {
    console.log(this.formTeacher.value);
    console.log(this.formStudent.value);
    console.log(this.formReason.value);
    let recievingTeacher: Teacher = this.formTeacher.value;
    let studentName = this.formStudent.value;
    let reason = this.formReason.value;
    console.log(recievingTeacher);
    console.log(studentName);

    // Create a new pass object
    // Sending Teacher will have to autofill with the current account
    if (reason != ""){
    var newPass = new Pass("Test Teacher", recievingTeacher.name, studentName, reason);
    } else {var newPass = new Pass("Test Teacher", recievingTeacher.name, studentName);}
    console.log(newPass);
    console.log(typeof newPass);
    // Add the new pass to the list
    // In the future this will just push to the database instead of the array
    activePasses.push(newPass);
  }

}

