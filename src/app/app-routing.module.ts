import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditComponent } from './addedit/addedit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';



const routes: Routes = [
  
  // { path: '/login', component : LoginPageComponent },
  { path: '', component : LoginComponent },
  {path: 'home' , component : HomeComponent},
  {path: 'addedit/:id' , component : AddeditComponent },
  {path: 'viewList' , component : UserlistComponent },
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
