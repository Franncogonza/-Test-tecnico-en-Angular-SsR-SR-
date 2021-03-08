import { LicenseListComponent } from './components/license-list/license-list.component';
import { ReusableToolbarComponent } from './shared/reusable/toolbar/reusable-toolbar.component';
import { ReusableTableComponent } from './shared/reusable/table/reusable-table.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LicenseDetailComponent } from './components/license-detail/license-detail.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { LicenseInformationComponent } from './components/license-detail/license-information/license-information.component';
import { PersonalInformationComponent } from './components/license-detail/personal-information/personal-information.component';
import { EmptyStateLicensesComponent } from './shared/empty-state-licenses/empty-state-licenses.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusableToolbarComponent,
    ReusableTableComponent,
    NavbarComponent,
    HomeComponent,
    LicenseDetailComponent,
    AboutComponent,
    LicenseListComponent,
    LicenseInformationComponent,
    PersonalInformationComponent,
    EmptyStateLicensesComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
