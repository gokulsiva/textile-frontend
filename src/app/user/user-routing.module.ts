import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'create', component: CreateUserComponent},
  {path: 'users', component: ListUserComponent},
  {path: 'users/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
