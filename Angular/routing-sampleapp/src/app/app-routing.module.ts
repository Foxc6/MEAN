import { LandingComponent } from './landing/landing.component'
import { HomeComponent } from './home/home.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: '', pathMatch: 'full', component: LandingComponent, children: [] },
{ path: 'home', pathMatch: 'full', component: HomeComponent, children: [] },
// The "**" route will catch any url that does not match a valid route. pathMatch: 'full' should be removed from this route object
{ path: '**', component: PagenotfoundComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
