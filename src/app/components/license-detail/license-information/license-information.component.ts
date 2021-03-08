import { Component } from '@angular/core';
import { LicensesService } from 'src/app/services/license-service/licenses.service';

@Component({
  selector: 'license-information',
  templateUrl: './license-information.component.html',
  styleUrls: ['./license-information.component.scss']
})
export class LicenseInformationComponent {
  licenseData$ = this.licenseService.licenseData$.value;
  constructor(private licenseService: LicensesService) { }
}
