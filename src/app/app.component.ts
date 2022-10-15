import { Component } from '@angular/core';
import { Pass, activePasses, inactivePasses } from './passes';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  changeState(pass: Pass, state: boolean){
  // Changes the state of a pass from either active to inactive or vice versa
  // Called when the user clicks on the "Click to make active" or "Click to make inactive" button
  pass.changeState(state);
  
  // If a pass is active, move it to inactive
  // If a pass is inactive, move it to active
  if(activePasses.includes(pass)){
    let removedPass = activePasses.splice(activePasses.indexOf(pass), 1);
    inactivePasses.push(pass);}

  else if(inactivePasses.includes(pass)){
    let removedPass = inactivePasses.splice(inactivePasses.indexOf(pass), 1);
    activePasses.push(pass);
  }
}
  


  deletePass(pass: Pass){
    let index = activePasses.findIndex(tempPass => tempPass.id == pass.id);
    activePasses.splice(index, 1);}

  title = 'hallPass';

  // Rather than importing these, once I do backend and database, this will have to call the database
  activePasses: Pass[] = activePasses;
  inactivePasses: Pass[] = inactivePasses;


}

