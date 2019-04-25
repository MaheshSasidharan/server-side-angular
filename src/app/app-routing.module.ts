import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user-list', component: UserListComponent },
  // { path: 'product-details/:id', component: ProductDetails,
  //   children: [
  //     { path: '', redirectTo: 'overview', pathMatch: 'full' },
  //     { path: 'overview', component: Overview },
  //     { path: 'specs', component: Specs }
  //   ]
  // }
  //{ path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
