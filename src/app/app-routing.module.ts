import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';


const routes: Routes = [
  {path:'hello',component:HelloWorldComponent},
  {path:'',component:UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
