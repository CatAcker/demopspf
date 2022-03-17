import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { ProofoflifeScreenComponent } from './components/proofoflife-screen/proofoflife-screen.component'

const routes: Routes = [
  {path: '', component: LoginScreenComponent},
  {path: 'home-screen', component: HomeScreenComponent},
  {path: 'proofOfLife-screen', component: ProofoflifeScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
