import { LicensesService } from 'src/app/services/license-service/licenses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
  licenseData$ = this.licenseService.licenseData$.value;
  constructor( private licenseService: LicensesService) { }
}
