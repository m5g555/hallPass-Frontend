import { Component } from '@angular/core';
import { Pass } from './passes';
import { AppRoutingModule } from './app-routing.module';
import { PassGetterService } from './service/pass-getter.service';
import { Teacher } from './teachers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  allPasses: Pass[] = [];
  activePasses: Pass[] = [];
  inactivePasses: Pass[] = [];

  constructor(private passGetter: PassGetterService){
  }

  ngOnInit(){
    this.passGetter.getPasses().subscribe((data: any) => {
      console.log(data)
      this.allPasses = data.map((pass: any) => new Pass(pass.sendingTeacherName,pass.receivingTeacherName, pass.studentName, pass._id, pass.reason, pass.timeCreated));
      console.log(this.allPasses)
      this.activePasses = this.allPasses.filter(pass => pass.state == false);
      this.inactivePasses = this.allPasses.filter(pass => pass.state == true);
      console.log(this.activePasses)
      console.log(this.inactivePasses)
    }, (error: any) => {console.log('error')}, () => {})
  };

  changeState(pass: Pass, state: boolean){
  // Changes the state of a pass from either active to inactive or vice versa
  // Called when the user clicks on the "Click to make active" or "Click to make inactive" button
  pass.changeState(state);
  
  // If a pass is active, move it to inactive
  // If a pass is inactive, move it to active
  if(this.activePasses.includes(pass)){
    let removedPass = this.activePasses.splice(this.activePasses.indexOf(pass), 1);
    this.inactivePasses.push(pass);}

  else if(this.inactivePasses.includes(pass)){
    let removedPass = this.inactivePasses.splice(this.inactivePasses.indexOf(pass), 1);
    this.activePasses.push(pass);
  }
}
  


  deletePass(pass: Pass){
    let index = this.activePasses.findIndex(tempPass => tempPass.studentName == pass.studentName);
    this.activePasses.splice(index, 1);
    this.passGetter.deletePass(pass.id).subscribe((data: any) => {
      console.log(data)
      window.location.reload()
    }, (error: any) => {console.log('error')}, () => {})  
  }

  title = 'hallPass';

  // dbCallPasses(){
  //   this.
  // }

  


}

