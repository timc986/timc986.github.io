import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'order', component: OrderComponent },
  // { path: 'upload', component: UploadComponent },
  // { path: 'login', component: AppComponent },
  // { path: 'register', component: AppComponent },
  // { path: 'settings', component: AppComponent, canActivate: [AuthGuard] },
  // // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
