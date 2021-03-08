import { AboutComponent } from './components/about/about.component';
import { LicenseDetailComponent } from './components/license-detail/license-detail.component';
import { LicenseListComponent } from './components/license-list/license-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'license-list', component: LicenseListComponent},
  { path: 'license-detail/:id', component: LicenseDetailComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
