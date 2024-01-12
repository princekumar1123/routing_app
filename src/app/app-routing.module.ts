import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { EditUserPageComponent } from './edit-user-page/edit-user-page.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { ActiveGuard } from 'src/app/active.guard';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [
  { path: "register", component: RegisterPageComponent , canActivate: [ActiveGuard] },
  { path: "login", component: LoginPageComponent , canActivate: [ActiveGuard]  },
  { path: "homePage", component: HomePageComponent, canActivate: [ActiveGuard] },
  { path: "userList", component: UserListPageComponent, canActivate: [ActiveGuard] },
  { path: "editAndAdd", component: EditUserPageComponent, canActivate: [ActiveGuard] },
  { path: "userDetail", component: UserDetailsPageComponent, canActivate: [ActiveGuard] },
  { path: "", component: LoginPageComponent },
  {path:'**',component:WildCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
