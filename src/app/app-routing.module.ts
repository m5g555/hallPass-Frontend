import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPassComponent } from 'src\\app\\new-pass\\new-pass.component';

// List of all pages in my site
const routes: Routes = [
  // each route is an object with a path and a connected component
  { path: 'new-pass', component: NewPassComponent },
]

@NgModule({
  // Import the list of routes into the module
  imports: [RouterModule.forRoot(routes)],

  // Export the list of routes so that it can be used in other modules
  exports: [RouterModule]
})
export class AppRoutingModule { }
