import { Component } from '@angular/core';
import { Pass, passes } from './passes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
changeState(pass: Pass){
  pass.active = !pass.active;
}
  title = 'hallPass';
  passes = passes;
}
