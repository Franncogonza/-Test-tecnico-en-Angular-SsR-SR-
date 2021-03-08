import { Component } from '@angular/core';
import { LicensesService } from 'src/app/services/license-service/licenses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  licenseData$ = this.licenseService.licenseData$;
  constructor(private licenseService: LicensesService) { }
}
